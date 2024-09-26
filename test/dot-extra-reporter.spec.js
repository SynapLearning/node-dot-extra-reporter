import assert from "node:assert";
import { describe, it } from "node:test";

describe('DotExtraReporter', () => {
  it('should pass', () => {
    assert.equal(true, true);
  });

  it('should fail', () => {
    assert.equal(true, false);
  });

  it.skip('should skip', () => {
    assert.fail();
  })

  it.todo('should be todo', () => {
    assert.fail();
  })

  describe('nested', () => {
    it('should pass', () => {
      assert.equal(true, true);
    });

    it('should fail', () => {
      assert.equal(true, false);
    });

    it.skip('should skip', () => {
      assert.fail();
    })

    it.todo('should be todo', () => {
      assert.fail();
    })
  });

  describe.skip('nested skipped', () => {
    it('should pass', () => {
      assert.equal(true, true);
    });

    it('should fail', () => {
      assert.equal(true, false);
    });

    it.skip('should skip', () => {
      assert.fail();
    })

    it.todo('should be todo', () => {
      assert.fail();
    })
  });
});