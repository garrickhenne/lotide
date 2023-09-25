const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe('#findKeyByValue', () => {
  const testData = {
    sciFi: 'The Expanse',
    comedy: 'Brooklyn Nine-Nine',
    drama: 'The Wire'
  };

  it('Returns key when searching with value contained in object', () => {
    assert.equal(findKeyByValue(testData, 'The Expanse'), 'sciFi');
  });

  it('Returns undefined if key-value pair not found', () => {
    assert.isUndefined(findKeyByValue(testData, 'hello'));
  });

  it('Returns undefined when searching with empty string', () => {
    assert.isUndefined(findKeyByValue(testData, ''));
  });

  it('returns undefined when given an array', () => {
    assert.isUndefined(findKeyByValue([1, 2], 'this'));
  });

  it('returns undefined when given undefined search array', () => {
    assert.isUndefined(findKeyByValue(undefined, 'this'));
  });

  it('returns undefined when given null search array', () => {
    assert.isUndefined(findKeyByValue(null, 'this'));
  });
});