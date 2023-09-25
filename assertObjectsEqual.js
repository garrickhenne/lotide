const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual, expected) => {
  if (!actual || !expected || Array.isArray(actual) || Array.isArray(expected) || typeof actual !== 'object' || typeof expected !== 'object') {
    console.log('Please give two valid objects.');
    return;
  }

  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} is equal to ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: Array 1 NOT EQUAL to Array 2`);
    console.log(`Given: ${inspect(actual)} \n Expected: ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;