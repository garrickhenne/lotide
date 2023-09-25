const findKey = require('../findKey');
const assert = require('chai').assert;

describe('#findKey', () => {
  it('Returns key of object containing key value callback true', () => {
    const result = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars === 2); // => "noma"

    assert.equal(result, 'noma');
  });

  it('Returns undefined if callback does not return true', () => {
    assert.isUndefined(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars === 60));
  });
});