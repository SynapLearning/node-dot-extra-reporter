import assert from "node:assert";
import { describe, it } from "node:test";

describe('DotExtraReporter', () => {
  it('should pass', () => {
    assert.equal(true, true);
  });

  it('should fail', () => {
    assert.equal(true, false);
  });
});