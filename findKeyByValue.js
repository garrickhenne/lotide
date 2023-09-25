const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// takes in an object and a value. It should scan the object and return the first key which contains the given value.
// If no key with that given value is found, then it should return undefined.
const findKeyByValue = (searchObject, value) => {
  if (!searchObject || Array.isArray(searchObject) || value === '') return undefined;

  for (const key in searchObject) {
    if (searchObject[key] === value) {
      return key;
    }
  }

  return undefined;
};

module.exports = findKeyByValue;

// TEST
const expected1 = {
  sciFi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire'
};
const actual1 = findKeyByValue(expected1, 'The Expanse');
const actual2 = findKeyByValue(expected1, 'Brooklyn Nine-Nine');
const actual3 = findKeyByValue(expected1, 'The Wire');
assertEqual(actual1, 'sciFi');
assertEqual(actual2, 'comedy');
assertEqual(actual3, 'drama');

const actual4 = findKeyByValue(expected1, 'hello');
assertEqual(actual4, undefined);

const actual5 = findKeyByValue(expected1, '');
assertEqual(actual5, undefined);

assertEqual(findKeyByValue([1, 2], "this"), undefined);
assertEqual(findKeyByValue(undefined, "this"), undefined);
assertEqual(findKeyByValue(null, "this"), undefined);
