const flatten = require('../flatten');
const assert = require('chai').assert;

describe('#flatten', () => {
  it('returns a flat array with single nested arrays', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it('returns a flat array with double nested arrays', () => {
    assert.deepEqual(flatten([1, [2, 3, [4, 3]]]), [1, 2, 3, 4, 3]);
  });

  it('returns flattened array with triple-nested array', () => {
    assert.deepEqual(flatten([1, 2, 3, [4, 5, [6, 7, [8, 9]]], 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('returns undefined when non-array passed in', () => {
    assert.isUndefined(flatten(1));
    assert.isUndefined(flatten('hello'));
  });
});