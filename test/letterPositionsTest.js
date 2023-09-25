const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe('#letterPositions', () => {
  it('returns object of arrays of positions with string', () => {
    const actual = letterPositions('hello');
    const expected = {
      h: [0],
      e: [1],
      l: [2, 3],
      o: [4]
    };
    assert.deepEqual(actual, expected);
  });

  it('returns object of arrays with string containing whitespace', () => {
    const actual = letterPositions('lighthouse in the house');
    const expected = {
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12]
    };

    assert.deepEqual(actual, expected);
  });
});