import { Transform, type TransformCallback } from "node:stream";
import chalk from "chalk";
import test from "node:test";

// Useful documentation here: https://nodejs.org/api/test.html#class-testsstream

// Map of file name to
type TestSuite = Record<string, Suite>;

type Suite = {
  file: string;
  name: string;
  nesting: number;
  children?: Record<string, Test | Suite>;
  passed?: boolean;
  details?: { duration_ms: number; type?: "suite"; error?: { cause?: Error } };
  skip?: boolean | string;
  todo?: boolean | string;
};

type Test = {
  file: string;
  name: string;
  nesting: number;
  message?: string;
  details: {
    duration_ms: number;
    type?: "suite";
    error?: {
      cause: Error;
    };
  };
  skip?: boolean | string;
  todo?: boolean | string;
  passed?: boolean;
};

enum EventType {
  ENQUEUE = "test:enqueue",
  DEQUEUE = "test:dequeue",
  START = "test:start",
  PASS = "test:pass",
  FAIL = "test:fail",
  PLAN = "test:plan",
  WATCH_DRAINED = "test:watch:drained",
  STDOUT = "test:stdout",
  STDERR = "test:stderr",
}

type Event = {
  type: EventType;
  data: Test;
};

class DotExtraReporter extends Transform {
  private passedTests: number;

  private skippedTests: Test[];

  private todoTests: Test[];

  private totalDuration: number;

  private failedTests: Test[];

  private testSuite: TestSuite;

  private currentSuite: Suite | undefined;

  private currentSuiteLineage: Suite[] = [];

  private nesting = 0;

  constructor(options = {}) {
    super({ ...options, writableObjectMode: true });
    this.passedTests = 0;
    this.skippedTests = [];
    this.todoTests = [];
    this.totalDuration = 0;
    this.failedTests = [];
    this.testSuite = {};
  }

  private buildMap(test: Test, eventType: EventType) {
    // Definition order
    // test:start
    // test:pass | test:fail
    // test:plan (suite finished)

    if (eventType === EventType.START) {
      // Add new child
      const newItem = {
        file: test.file,
        name: test.name,
        nesting: test.nesting,
        children: {},
      };

      // If nesting > current nesting then
      // We've moved into a nested suite so:
      // - Add the current suite to the lineage
      // - Add new item as a child of the current suite
      if (test.nesting === 0) {
        // First entry
        this.currentSuite = newItem;
        this.testSuite[`${test.file}:${test.name}`] = newItem;
      } else if (test.nesting > this.nesting) {
        this.currentSuiteLineage.push(this.currentSuite!);
        this.currentSuite!.children![test.name] = newItem;

        this.currentSuite = newItem;
      } else {
        // Not deeper so add to current parent, and set new item to current
        const parent = this.currentSuiteLineage.pop();
        parent!.children![test.name] = newItem;
        this.currentSuiteLineage.push(parent!);
        this.currentSuite = newItem;
      }
    }

    if (eventType === EventType.PASS || eventType === EventType.FAIL) {
      if (test.name === test.file) {
        return;
      }
      // Update test result details
      this.currentSuite!.passed = eventType === EventType.PASS;

      if (test.details) {
        this.currentSuite!.details = test.details;
      }
      if (test.skip) {
        process.stdout.write(chalk.yellow("*"));
        this.currentSuite!.skip = test.skip;
      } else if (test.todo) {
        process.stdout.write(chalk.blue("-"));
        this.currentSuite!.todo = test.todo;
      } else if (this.currentSuite!.passed) {
        process.stdout.write(chalk.green("."));
      } else {
        process.stdout.write(chalk.red("F"));
      }
    }

    if (eventType === EventType.PLAN) {
      // Suite finished, step up to parent
      this.currentSuite = this.currentSuiteLineage.pop();
    }

    this.nesting = test.nesting;
  }

  public override _transform(
    event: Event,
    _encoding: BufferEncoding,
    callback: TransformCallback
  ): void {
    try {
      const test = event.data as Test;

      if (test.file) {
        this.buildMap(test, event.type);
      }
      callback();
    } catch (error) {
      console.log(error);
      callback(error as Error);
    }
  }

  public processOutcomes() {
    Object.entries(this.testSuite).forEach(([file, suite]) => {
      this.buildStats(suite);
      // File suite doesn't have a duration so collate from all top level suites.
      Object.values(suite.children ?? {}).forEach((child) => {
        this.totalDuration += child.details?.duration_ms || 0;
      });
    });
  }

  private buildStats(suite: Suite | Test, prefix?: string) {
    const isSuite = (obj: Suite | Test): obj is Suite =>
      obj.details?.type === "suite";

    if (isSuite(suite)) {
      // Iterate over each child
      Object.values(suite.children!).forEach((child) =>
        this.buildStats(
          child,
          prefix
            ? `${prefix} > ${suite.name}`
            : suite.name
        )
      );
    }
     
    if (prefix) {
      suite.name = `${prefix} > ${suite.name}`;
    }
    if (suite.skip) {
      this.skippedTests.push(suite as Test);
    } else if (suite.todo) {
      this.todoTests.push(suite as Test);
    } else if(!isSuite(suite)) {
      if (suite.passed === false) {
        this.failedTests.push(suite as Test);
      } else {

        this.passedTests++;
      }
    }
  }

  public override _flush() {

    this.processOutcomes();

    if (this.skippedTests.length > 0) {
      console.log("\n\nSkipped:");
      this.skippedTests.forEach((test, i) => {
        console.log(`\n${i + 1}) ${test.name}`);
        if (typeof test.skip === "string") {
          console.log(chalk.yellow(`\tSkipped: ${test.skip}`));
        } else {
          console.log(chalk.yellow(`\t${"Skipped: No reason"}`));
        }
      });
    }

    if (this.todoTests.length > 0) {
      console.log("\n\nTodo:");
      this.todoTests.forEach((test, i) => {
        console.log(`\n${i + 1}) ${test.name}`);
        if (typeof test.todo === "string") {
          console.log(chalk.blue(`\tTODO: ${test.todo}`));
        } else {
          console.log(chalk.blue(`\t${"TODO: No reason"}`));
        }
      });
    }

    if (this.failedTests.length > 0) {
      console.log(chalk.red("\n✖") + " Failing tests:");
      this.failedTests.forEach((test, i) => {
        console.log(
          chalk.red(`\n${i + 1}) ${test.name} (${test.details.duration_ms}ms)`)
        );
        console.log(test.details.error?.cause);
      });
    }

    console.log(
      `\n\nℹ Tests    ${
        this.passedTests +
        this.failedTests.length +
        this.skippedTests.length +
        this.todoTests.length
      }`
    );
    console.log(`ℹ Passed   ${chalk.green(this.passedTests)}`);
    console.log(`ℹ Failed   ${chalk.red(this.failedTests.length)}`);
    console.log(`ℹ Skipped  ${chalk.yellow(this.skippedTests.length)}`);
    console.log(`ℹ Todo     ${chalk.blue(this.todoTests.length)}`);
    console.log(`ℹ Duration ${this.totalDuration.toFixed(2)}ms`);

    this.passedTests = 0;
    this.skippedTests = [];
    this.todoTests = [];
    this.totalDuration = 0;
    this.failedTests = [];
    this.testSuite = {};
  }
}

export default DotExtraReporter;
