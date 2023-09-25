const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it('returns true with nested arrays', () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });

  it('returns false when nested arrays not equal', () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
  });

  it('returns true for equal non-nested arrays', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it('returns false for non-nested equal array but in different order arrays', () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it('returns true for array of string values', () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

  it('does strict equality comparison', () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });

  it('returns false for unequal lengthed arrays', () => {
    assert.isFalse(eqArrays([1, 2], [1, 2, 3]));
  });

  it('returns true on two empty arrays', () => {
    assert.isTrue(eqArrays([], []));
  });
});