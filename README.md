# node-dot-extra-reporter

This project provides a simple alternative to the built in reporters for the node test runner.

Currently the node test runner provides a tap, dot and spec reporter.

The dot reporter has the benefit of being concise, but does not provide feedback on which tests failed.

This project aims to resolve this by providing a dot reporter implementation which also provides details of failing tests.

## Usage

To use this reporter, run node tests using the `--test-reporter=@synap-ac/node-dot-extra-reporter`