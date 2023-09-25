const without = require('../without');
const assert = require('chai').assert;

describe('#without', () => {
  it('Returns array without values inputted', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it('returns new array comparing with strict equal', () => {
    assert.deepEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
  });

  it('returns array deleting many of same element', () => {
    assert.deepEqual(without([1, 1, 1, 1, 2], [1, 3]), [2]);
  });

  it('returns same array when second array empty', () => {
    assert.deepEqual(without([2], []), [2]);
  });

  it('returns unchanged array when second array does not contain values from first', () => {
    assert.deepEqual(without([2], [3]), [2]);
  });

  it('returns empty array with second array not being an array', () => {
    assert.isEmpty(without([2], 1));
  });

  it('Returns empty array when second array is undefined', () => {
    assert.isEmpty(without([2], undefined));
  });

  it('returns empty array when first array is empty', () => {
    assert.isEmpty(without([], [1]));
  });

  it('returns empty array both arguments empty', () => {
    assert.isEmpty(without([], []));
  });

  it('Should not alter array passed in', () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ['lighthouse']);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});