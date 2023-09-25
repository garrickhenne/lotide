const map = require('../map');
const assert = require('chai').assert;

describe('#map', () => {
  const words = ["ground", "control", "to", "major", "tom"];

  it('Performs callback and returns array with transformation on strings', () => {
    const result = map(words, word => word[0]);
    assert.deepEqual(result, ['g', 'c', 't', 'm', 't']);
  });
});