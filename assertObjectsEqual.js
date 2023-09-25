const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length || !Array.isArray(arr1) || !Array.isArray(arr2)) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (const key in object1) {
    if (object1[key] !== object2[key]) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      }
      return false;
    }
  }

  return true;
};

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

assertObjectsEqual({}, {});
assertObjectsEqual({ hello: 'hello' }, { hello: 'hello' });
assertObjectsEqual({ hello: 'hello' }, { hello: 'hell' }); // expect false message.
assertObjectsEqual({ hello: 'hello' }, { hello: 1 }); // expect false message.
assertObjectsEqual({ hello: 1 }, { hello: 1 });
assertObjectsEqual({ hello: [1, 2] }, { hello: [1, 2] });
assertObjectsEqual({ hello: [1, 2] }, { hello: [1] }); // expect false message.
assertObjectsEqual(undefined, { hi: 'hello' }); // expect false message.
assertObjectsEqual({ hi: 'hello' }, undefined); // expect false message.