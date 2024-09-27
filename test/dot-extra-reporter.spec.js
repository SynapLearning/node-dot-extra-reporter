import assert from "node:assert";
import { describe, it } from "node:test";
import DotExtraReporter from "../lib/dot-extra-reporter.js";

describe("First DotExtraReporter", () => {
  it("should work", () => {});

  it.skip("should skip", () => {});
});

/*
      { "type": "test:enqueue", "data": { "nesting": 0, "name": "/node-dot-extra-reporter/test/dot-extra-reporter.spec.js", "line": 1, "column": 1, "file": "/node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:dequeue", "data": { "nesting": 0, "name": "/node-dot-extra-reporter/test/dot-extra-reporter.spec.js", "line": 1, "column": 1, "file": "/node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:enqueue", "data": { "nesting": 0, "name": "DotExtraReporter", "line": 8, "column": 1, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:dequeue", "data": { "nesting": 0, "name": "DotExtraReporter", "line": 8, "column": 1, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:enqueue", "data": { "nesting": 1, "name": "t1", "line": 19, "column": 3, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:enqueue", "data": { "nesting": 1, "name": "s1", "line": 35, "column": 3, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:enqueue", "data": { "nesting": 1, "name": "s2", "line": 53, "column": 3, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:start", "data": { "nesting": 0, "name": "DotExtraReporter", "line": 8, "column": 1, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:dequeue", "data": { "nesting": 1, "name": "t1", "line": 19, "column": 3, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:start", "data": { "nesting": 1, "name": "t1", "line": 19, "column": 3, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:pass", "data": { "name": "t1", "nesting": 1, "testNumber": 2, "details": { "duration_ms": 0.087212 }, "line": 19, "column": 3, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:dequeue", "data": { "nesting": 1, "name": "s1", "line": 35, "column": 3, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:enqueue", "data": { "nesting": 2, "name": "t2", "line": 36, "column": 5, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:dequeue", "data": { "nesting": 2, "name": "t2", "line": 36, "column": 5, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:start", "data": { "nesting": 1, "name": "s1", "line": 35, "column": 3, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:start", "data": { "nesting": 2, "name": "t2", "line": 36, "column": 5, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:pass", "data": { "name": "t2", "nesting": 2, "testNumber": 1, "details": { "duration_ms": 0.073683 }, "line": 36, "column": 5, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:plan", "data": { "nesting": 2, "count": 1, "line": 35, "column": 3, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:pass", "data": { "name": "s1", "nesting": 1, "testNumber": 3, "details": { "duration_ms": 0.171318, "type": "suite" }, "line": 35, "column": 3, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:dequeue", "data": { "nesting": 1, "name": "s2", "line": 53, "column": 3, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:enqueue", "data": { "nesting": 2, "name": "t3", "line": 54, "column": 5, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:dequeue", "data": { "nesting": 2, "name": "t3", "line": 54, "column": 5, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:start", "data": { "nesting": 1, "name": "s2", "line": 53, "column": 3, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:start", "data": { "nesting": 2, "name": "t3", "line": 54, "column": 5, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:pass", "data": { "name": "t3", "nesting": 2, "testNumber": 1, "details": { "duration_ms": 0.072507 }, "line": 54, "column": 5, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:plan", "data": { "nesting": 2, "count": 1, "line": 53, "column": 3, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:pass", "data": { "name": "s2", "nesting": 1, "testNumber": 4, "details": { "duration_ms": 0.172049, "type": "suite" }, "line": 53, "column": 3, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:plan", "data": { "nesting": 1, "count": 4, "line": 8, "column": 1, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
      { "type": "test:pass", "data": { "name": "DotExtraReporter", "nesting": 0, "testNumber": 1, "details": { "duration_ms": 2.280008, "type": "suite" }, "line": 8, "column": 1, "file": "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js" } },
*/

describe("DotExtraReporter", () => {
  it("should work", () => {
    const events = [
      {
        type: "test:enqueue",
        data: {
          nesting: 0,
          name: "/node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
          line: 1,
          column: 1,
          file: "/node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:start",
        data: {
          nesting: 0,
          name: "DotExtraReporter",
          line: 8,
          column: 1,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:start",
        data: {
          nesting: 1,
          name: "t1",
          line: 19,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:fail",
        data: {
          name: "t1",
          nesting: 1,
          testNumber: 2,
          details: { duration_ms: 0.087212 },
          line: 19,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:start",
        data: {
          nesting: 1,
          name: "s1",
          line: 35,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:start",
        data: {
          nesting: 2,
          name: "t2",
          line: 36,
          column: 5,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:pass",
        data: {
          name: "t2",
          nesting: 2,
          testNumber: 1,
          details: { duration_ms: 0.073683 },
          line: 36,
          column: 5,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
          todo: true,
        },
      },
      {
        type: "test:plan",
        data: {
          nesting: 2,
          count: 1,
          line: 35,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:pass",
        data: {
          name: "s1",
          nesting: 1,
          testNumber: 3,
          details: { duration_ms: 0.171318, type: "suite" },
          line: 35,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:start",
        data: {
          nesting: 1,
          name: "s2",
          line: 53,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:start",
        data: {
          nesting: 2,
          name: "t3",
          line: 54,
          column: 5,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:pass",
        data: {
          name: "t3",
          nesting: 2,
          testNumber: 1,
          details: { duration_ms: 0.072507 },
          line: 54,
          column: 5,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
          skip: true,
        },
      },
      {
        type: "test:plan",
        data: {
          nesting: 2,
          count: 1,
          line: 53,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:pass",
        data: {
          name: "s2",
          nesting: 1,
          testNumber: 4,
          details: { duration_ms: 0.172049, type: "suite" },
          line: 53,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:plan",
        data: {
          nesting: 1,
          count: 4,
          line: 8,
          column: 1,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:pass",
        data: {
          name: "DotExtraReporter",
          nesting: 0,
          testNumber: 1,
          details: { duration_ms: 2.280008, type: "suite" },
          line: 8,
          column: 1,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
    ];
    const reporter = new DotExtraReporter();

    events.forEach((event) => {
      reporter._transform(event, "utf8", () => {});
    });

    // console.log(JSON.stringify(reporter.testSuite, null, 2));

    assert.deepStrictEqual(reporter.testSuite, {
      "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js:DotExtraReporter": {
        file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        name: "DotExtraReporter",
        nesting: 0,
        passed: true,
        details: { duration_ms: 2.280008, type: "suite" },
        children: {
          t1: {
            file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
            name: "t1",
            nesting: 1,
            passed: false,
            details: { duration_ms: 0.087212 },
            children: {},
          },
          s1: {
            file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
            name: "s1",
            nesting: 1,
            passed: true,
            details: { duration_ms: 0.171318, type: "suite" },
            children: {
              t2: {
                file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
                name: "t2",
                nesting: 2,
                passed: true,
                todo: true,
                details: { duration_ms: 0.073683 },
                children: {},
              },
            },
          },
          s2: {
            file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
            name: "s2",
            nesting: 1,
            passed: true,
            details: { duration_ms: 0.172049, type: "suite" },
            children: {
              t3: {
                file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
                name: "t3",
                nesting: 2,
                passed: true,
                skip: true,
                details: { duration_ms: 0.072507 },
                children: {},
              },
            },
          },
        },
      }
    });
  });

  it("should work with multiple files", () => {
    const events = [
      {
        type: "test:enqueue",
        data: {
          nesting: 0,
          name: "/node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
          line: 1,
          column: 1,
          file: "/node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:start",
        data: {
          nesting: 0,
          name: "DotExtraReporter",
          line: 8,
          column: 1,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:start",
        data: {
          nesting: 1,
          name: "t1",
          line: 19,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:fail",
        data: {
          name: "t1",
          nesting: 1,
          testNumber: 2,
          details: { duration_ms: 0.087212 },
          line: 19,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:start",
        data: {
          nesting: 1,
          name: "s1",
          line: 35,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:start",
        data: {
          nesting: 2,
          name: "t2",
          line: 36,
          column: 5,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:pass",
        data: {
          name: "t2",
          nesting: 2,
          testNumber: 1,
          details: { duration_ms: 0.073683 },
          line: 36,
          column: 5,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
          todo: true,
        },
      },
      {
        type: "test:plan",
        data: {
          nesting: 2,
          count: 1,
          line: 35,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:pass",
        data: {
          name: "s1",
          nesting: 1,
          testNumber: 3,
          details: { duration_ms: 0.171318, type: "suite" },
          line: 35,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:start",
        data: {
          nesting: 1,
          name: "s2",
          line: 53,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:start",
        data: {
          nesting: 2,
          name: "t3",
          line: 54,
          column: 5,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:pass",
        data: {
          name: "t3",
          nesting: 2,
          testNumber: 1,
          details: { duration_ms: 0.072507 },
          line: 54,
          column: 5,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
          skip: true,
        },
      },
      {
        type: "test:plan",
        data: {
          nesting: 2,
          count: 1,
          line: 53,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:pass",
        data: {
          name: "s2",
          nesting: 1,
          testNumber: 4,
          details: { duration_ms: 0.172049, type: "suite" },
          line: 53,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:plan",
        data: {
          nesting: 1,
          count: 4,
          line: 8,
          column: 1,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },
      {
        type: "test:pass",
        data: {
          name: "DotExtraReporter",
          nesting: 0,
          testNumber: 1,
          details: { duration_ms: 2.280008, type: "suite" },
          line: 8,
          column: 1,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        },
      },

      {
        type: "test:enqueue",
        data: {
          nesting: 0,
          name: "/node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
          line: 1,
          column: 1,
          file: "/node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
        },
      },
      {
        type: "test:start",
        data: {
          nesting: 0,
          name: "DotExtraReporter",
          line: 8,
          column: 1,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
        },
      },
      {
        type: "test:start",
        data: {
          nesting: 1,
          name: "t1",
          line: 19,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
        },
      },
      {
        type: "test:fail",
        data: {
          name: "t1",
          nesting: 1,
          testNumber: 2,
          details: { duration_ms: 0.087212 },
          line: 19,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
        },
      },
      {
        type: "test:start",
        data: {
          nesting: 1,
          name: "s1",
          line: 35,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
        },
      },
      {
        type: "test:start",
        data: {
          nesting: 2,
          name: "t2",
          line: 36,
          column: 5,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
        },
      },
      {
        type: "test:pass",
        data: {
          name: "t2",
          nesting: 2,
          testNumber: 1,
          details: { duration_ms: 0.073683 },
          line: 36,
          column: 5,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
          todo: true,
        },
      },
      {
        type: "test:plan",
        data: {
          nesting: 2,
          count: 1,
          line: 35,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
        },
      },
      {
        type: "test:pass",
        data: {
          name: "s1",
          nesting: 1,
          testNumber: 3,
          details: { duration_ms: 0.171318, type: "suite" },
          line: 35,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
        },
      },
      {
        type: "test:start",
        data: {
          nesting: 1,
          name: "s2",
          line: 53,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
        },
      },
      {
        type: "test:start",
        data: {
          nesting: 2,
          name: "t3",
          line: 54,
          column: 5,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
        },
      },
      {
        type: "test:pass",
        data: {
          name: "t3",
          nesting: 2,
          testNumber: 1,
          details: { duration_ms: 0.072507 },
          line: 54,
          column: 5,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
          skip: true,
        },
      },
      {
        type: "test:plan",
        data: {
          nesting: 2,
          count: 1,
          line: 53,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
        },
      },
      {
        type: "test:pass",
        data: {
          name: "s2",
          nesting: 1,
          testNumber: 4,
          details: { duration_ms: 0.172049, type: "suite" },
          line: 53,
          column: 3,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
        },
      },
      {
        type: "test:plan",
        data: {
          nesting: 1,
          count: 4,
          line: 8,
          column: 1,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
        },
      },
      {
        type: "test:pass",
        data: {
          name: "DotExtraReporter",
          nesting: 0,
          testNumber: 1,
          details: { duration_ms: 2.280008, type: "suite" },
          line: 8,
          column: 1,
          file: "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
        },
      },
    ];
    const reporter = new DotExtraReporter();

    events.forEach((event) => {
      reporter._transform(event, "utf8", () => {});
    });

    assert.deepStrictEqual(reporter.testSuite, {
      "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js:DotExtraReporter": {
        file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        name: "DotExtraReporter",
        nesting: 0,
        passed: true,
        details: { duration_ms: 2.280008, type: "suite" },
        children: {
          t1: {
            file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
            name: "t1",
            nesting: 1,
            passed: false,
            details: { duration_ms: 0.087212 },
            children: {},
          },
          s1: {
            file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
            name: "s1",
            nesting: 1,
            passed: true,
            details: { duration_ms: 0.171318, type: "suite" },
            children: {
              t2: {
                file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
                name: "t2",
                nesting: 2,
                passed: true,
                todo: true,
                details: { duration_ms: 0.073683 },
                children: {},
              },
            },
          },
          s2: {
            file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
            name: "s2",
            nesting: 1,
            passed: true,
            details: { duration_ms: 0.172049, type: "suite" },
            children: {
              t3: {
                file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
                name: "t3",
                nesting: 2,
                passed: true,
                skip: true,
                details: { duration_ms: 0.072507 },
                children: {},
              },
            },
          },
        },
      },
      "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js:DotExtraReporter": {
        file: "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
        name: "DotExtraReporter",
        nesting: 0,
        passed: true,
        details: { duration_ms: 2.280008, type: "suite" },
        children: {
          t1: {
            file: "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
            name: "t1",
            nesting: 1,
            passed: false,
            details: { duration_ms: 0.087212 },
            children: {},
          },
          s1: {
            file: "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
            name: "s1",
            nesting: 1,
            passed: true,
            details: { duration_ms: 0.171318, type: "suite" },
            children: {
              t2: {
                file: "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
                name: "t2",
                nesting: 2,
                passed: true,
                todo: true,
                details: { duration_ms: 0.073683 },
                children: {},
              },
            },
          },
          s2: {
            file: "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
            name: "s2",
            nesting: 1,
            passed: true,
            details: { duration_ms: 0.172049, type: "suite" },
            children: {
              t3: {
                file: "file:///node-dot-extra-reporter/test/dot-extra-reporter2.spec.js",
                name: "t3",
                nesting: 2,
                passed: true,
                skip: true,
                details: { duration_ms: 0.072507 },
                children: {},
              },
            },
          },
        },
      },
    });
  });

  it("should buildStats", () => {
    const testOutcomes = {
      "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js:DotExtraReporter": {
        file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
        name: "DotExtraReporter",
        nesting: 0,
        passed: true,
        details: { duration_ms: 2.280008, type: "suite" },
        children: {
          t1: {
            file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
            name: "t1",
            nesting: 1,
            passed: false,
            details: { duration_ms: 0.087212 },
            children: {},
          },
          t2: {
            file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
            name: "t2",
            nesting: 1,
            passed: true,
            details: { duration_ms: 0.087212 },
            children: {},
          },
          s1: {
            file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
            name: "s1",
            nesting: 1,
            passed: true,
            details: { duration_ms: 0.171318, type: "suite" },
            children: {
              t3: {
                file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
                name: "t3",
                nesting: 2,
                passed: true,
                todo: true,
                details: { duration_ms: 0.073683 },
                children: {},
              },
            },
          },
          s2: {
            file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
            name: "s2",
            nesting: 1,
            passed: true,
            details: { duration_ms: 0.172049, type: "suite" },
            children: {
              t4: {
                file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
                name: "t4",
                nesting: 2,
                passed: true,
                skip: true,
                details: { duration_ms: 0.072507 },
                children: {},
              },
              t5: {
                file: "file:///node-dot-extra-reporter/test/dot-extra-reporter.spec.js",
                name: "t5",
                nesting: 2,
                passed: true,
                details: { duration_ms: 0.072507 },
                children: {},
              },
            },
          },
        }
      }
    };

    const reporter = new DotExtraReporter();
    reporter["testSuite"] = testOutcomes;

    reporter.processOutcomes();

    assert.strictEqual(reporter["passedTests"], 2);
    assert.strictEqual(reporter["skippedTests"].length, 1);
    assert.strictEqual(reporter["todoTests"].length, 1);
    assert.strictEqual(reporter["failedTests"].length, 1);
  });

  // it('t1', () => {
  //   assert.equal(true, true);
  // });

  // it('1 should fail', () => {
  //   assert.equal(true, false);
  // });

  // it.skip('1 should skip', () => {
  //   assert.fail();
  // })

  // it.todo('1 should be todo', () => {
  //   assert.fail();
  // })

  // describe('s1', () => {
  //   it('t2', () => {
  //     assert.equal(true, true);
  //   });

  //   it('2 should fail', () => {
  //     assert.equal(true, false);
  //   });

  //   it.skip('2 should skip', () => {
  //     assert.fail();
  //   })

  //   it.todo('2 should be todo', () => {
  //     assert.fail();
  //   })
  // });

  // describe('s2', () => {
  //   it('t2', () => {
  //     assert.equal(true, true);
  //   });

  //   it('2 should fail', () => {
  //     assert.equal(true, false);
  //   });

  //   it.skip('2 should skip', () => {
  //     assert.fail();
  //   })

  //   it('2 should skip with reason', {skip: 'Reason for skipping goes here'}, () => {
  //     assert.fail();
  //   })

  //   it('2 should skip with reason', (t) => {
  //     t.skip('Some reason within the test');
  //     assert.fail();
  //   })

  //   it.todo('2 should be todo', () => {
  //     assert.fail();
  //   })

  //   describe('s2.1', () => {
  //     it('t2.1', () => {
  //       assert.equal(true, true);
  //     });

  //     it('2.1 should fail', () => {
  //       assert.equal(true, false);
  //     });

  //     it.skip('2.1 should skip', () => {
  //       assert.fail();
  //     })

  //     it.todo('2.1 should be todo', () => {
  //       assert.fail();
  //     })
  //   });
  // });
});
