const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe('#countLetters', () => {
  it('Returns proper object containing counts in sentence', () => {
    const expected = {
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1,
    };
    assert.deepEqual(countLetters('lighthouse in the house'), expected);
  });

  it('Returns object of counts with small sentence', () => {
    const expected = {
      l: 2,
      h: 1
    };
    assert.deepEqual(countLetters('LHL'), expected);
  });

  it('Returns object of counts with sentence of numbers', () => {
    const expected = {
      '1': 3,
      '2': 2
    };
    assert.deepEqual(countLetters('11122'), expected);
  });

  it('Returns empty object when passed in undefined', () => {
    const actual = countLetters();
    assert.isObject(actual);
    assert.isEmpty(actual);
  });

  it('Returns empty object when given number-literal', () => {
    const actual = countLetters(1);
    assert.isObject(actual);
    assert.isEmpty(actual);
  });

  it('Returns empty object when given boolean', () => {
    const actual = countLetters(true);
    assert.isObject(actual);
    assert.isEmpty(actual);
  });
});