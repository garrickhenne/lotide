const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('returns empty array when given array of one element', () => {
    assert.isEmpty(middle([1]));
  });

  it('returns empty array when given array with two elements', () => {
    assert.isEmpty(middle([1, 2]));
  });

  it('Returns single middle element of odd sized array', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('returns single middle element of larger odd sized array', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('returns middle two element of even sized array', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('returns middle two elements of even sized larger array', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});