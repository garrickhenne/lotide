const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe('#countOnly', () => {
  const names = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const filter = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

  it('returns object of counts', () => {

    const expected = {
      'Fang': 2,
      'Jason': 1
    };

    const result = countOnly(names, filter);
    assert.deepEqual(result, expected);
  });
});