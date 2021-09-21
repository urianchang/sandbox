var assert = require('assert');

describe.skip('Is Mocha alive? Check with an Array', function() {
  before(function() {
    console.log("BEFORE ALL - 1");
  });
  beforeEach(function() {
    console.log("BEFORE EACH - 1");
  });

  describe('#indexOf()', function() {
    before(function() {
      console.log("BEFORE ALL - 1b");
    });
    beforeEach(function() {
      console.log("BEFORE EACH - 1b");
    });

    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });

  describe('#indexOf() - copy', function() {
    before(function() {
      console.log("BEFORE ALL - 1c");
    });
    beforeEach(function() {
      console.log("BEFORE EACH - 1c");
    });

    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });

    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


