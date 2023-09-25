const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns remaining items after first of ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });

  it('returns an empty array when given an array of one item', () => {
    assert.isEmpty(tail(['one']));
  });

  it('returns an empty array when given an empty array', () => {
    assert.isEmpty(tail([]));
  });

  it('returns undefined when given a non-array', () => {
    assert.isUndefined(tail(1));
  });
});