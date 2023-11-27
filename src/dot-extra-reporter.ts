import { Transform, type TransformCallback } from 'node:stream';
import chalk from 'chalk';

type Suite = {
  file: string;
  name: string;
  nesting: number;
};

type Test = {
  file: string;
  name: string;
  details: {
    duration_ms: number;
    type: string;
    error: {
      cause: string;
    };
  };
};

type Event = {
  type: string;
  data: Test | Suite;
};

class DotExtraReporter extends Transform {
  private passedTests: number;

  private skippedTests: number;

  private totalDuration: number;

  private failedTests: Test[];

  private failedSuites: Suite[];

  constructor(options = {}) {
    super({ ...options, writableObjectMode: true });
    this.passedTests = 0;
    this.skippedTests = 0;
    this.totalDuration = 0;
    this.failedTests = [];
    this.failedSuites = [];
  }

  public override _transform(
    event: Event,
    _encoding: BufferEncoding,
    callback: TransformCallback
  ): void {
    const test = event.data as Test;
    const suite = event.data as Suite;

    switch (event.type) {
      case 'test:pass':
        if (test.details.type !== 'suite') {
          this.passedTests++;
          this.totalDuration += test.details.duration_ms;
          process.stdout.write(chalk.green('.'));
        }
        break;
      case 'test:fail':
        if (test.details.type === 'suite') {
          this.failedSuites.push(suite);
        } else {
          this.failedTests.push(test);
          this.totalDuration += test.details.duration_ms;
          process.stdout.write(chalk.red('F'));
        }
        break;
      case 'test:skip':
      case 'test:todo':
        this.skippedTests++;
        process.stdout.write('*');
        break;
      case 'test:watch:drained':
        this._flush();
        break;
      default:
        break;
    }
    callback();
  }

  public override _flush() {
    if (this.failedTests.length > 0) {
      console.log(chalk.red('\n✖') + ' failing tests:');
      this.failedTests.forEach(test => {
        const suites = this.failedSuites
          .filter(suite => suite.file === test.file)
          .sort((a, b) => a.nesting - b.nesting);
        const fullName = suites
          .map(suite => suite.name)
          .concat(test.name)
          .join(' > ');
        console.log(
          chalk.red(`\n✖ ${fullName} (${test.details.duration_ms}ms)`)
        );
        console.log(test.details.error.cause);
      });
    }

    console.log(
      `\n\nℹ Tests    ${
        this.passedTests + this.failedTests.length + this.skippedTests
      }`
    );
    console.log(`ℹ Passed   ${chalk.green(this.passedTests)}`);
    console.log(`ℹ Failed   ${chalk.red(this.failedTests.length)}`);
    console.log(`ℹ Skipped  ${chalk.yellow(this.skippedTests)}`);
    console.log(`ℹ Duration ${this.totalDuration.toFixed(0)}ms`);

    this.passedTests = 0;
    this.skippedTests = 0;
    this.totalDuration = 0;
    this.failedTests = [];
    this.failedSuites = [];
  }
}

export default DotExtraReporter;
