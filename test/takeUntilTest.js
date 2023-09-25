const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe('#takeUntil', () => {
  it('Performs takeUntil correctly on array of numbers', () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const result = takeUntil(data, x => x < 0);
    assert.deepEqual(result, [1, 2, 5, 7, 2]);
  });

  it('Performs takeUntil correctly on array of strings', () => {
    const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const result = takeUntil(data, x => x === ',');
    assert.deepEqual(result, ["I've", 'been', 'to', 'Hollywood']);
  });

  it('returns empty array when performing on empty array', () => {
    assert.isEmpty(takeUntil([], x => x === ','));
  });

  it('throws error when array is not array', () => {
    assert.throws(() => takeUntil('hello', x => x === '5'), 'Please input valid arguments.');
  });

  it('throws error when search callback is incorrect', () => {
    assert.throws(() => takeUntil([1, 2, 3], 5));
  });

});