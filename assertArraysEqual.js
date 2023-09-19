const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.log('Both objects passed in must be arrays.');
    return;
  }

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: Array 1 is equal to Array 2!`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: Array 1 NOT EQUAL to Array 2`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2]);
assertArraysEqual(1, [1]);
assertArraysEqual([1], 1);
assertArraysEqual(['hello', 'motto'], ['hello', 'motto']);
assertArraysEqual(['hello', 'motto'], ['hello', 'mott']);