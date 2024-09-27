import assert from "node:assert";
import { describe, it } from "node:test";

describe('First DotExtraReporter 2', () => {
  it('should work', () => {
    assert.ok();
  });
  
  it.skip('should skip', () => {
    assert.ok();
  });
});

describe('DotExtraReporter2', () => {
  it('t1', () => {
    assert.equal(true, true);
  });

  it('1 should fail', () => {
    assert.equal(true, false);
  });

  it.skip('1 should skip', () => {
    assert.fail();
  })

  it.todo('1 should be todo', () => {
    assert.fail();
  })

  describe('s1', () => {
    it('t2', () => {
      assert.equal(true, true);
    });

    it('2 should fail', () => {
      assert.equal(true, false);
    });

    it.skip('2 should skip', () => {
      assert.fail();
    })

    it.todo('2 should be todo', () => {
      assert.fail();
    })
  });

  describe('s2', () => {
    it('t2', () => {
      assert.equal(true, true);
    });

    it('2 should fail', () => {
      assert.equal(true, false);
    });

    it.skip('2 should skip', () => {
      assert.fail();
    })

    it('2 should skip with reason', {skip: 'Reason for skipping goes here'}, () => {
      assert.fail();
    })

    it('2 should skip with reason', (t) => {
      t.skip('Some reason within the test');
      assert.fail();
    })

    it.todo('2 should be todo', () => {
      assert.fail();
    })

    describe.skip('s2.1', () => {
      it('t2.1', () => {
        assert.equal(true, true);
      });
  
      it('2.1 should fail', () => {
        assert.equal(true, false);
      });
  
      it.skip('2.1 should skip', () => {
        assert.fail();
      })
  
      it.todo('2.1 should be todo', () => {
        assert.fail();
      })
    });
  });
});