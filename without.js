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
/* -------------------- Fake imports above :) --------------- */

const without = function(originalArray, removalValues) {
  if (!Array.isArray(removalValues) || !Array.isArray(originalArray)) {
    return [];
  }

  let filteredArray = [];
  for (const item of originalArray) {
    if (!removalValues.includes(item)) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
};

module.exports = without;

// TESTS
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
assertArraysEqual(without([1, 1, 1, 1, 1, 2], [1, 3]), [2]);
assertArraysEqual(without([2], []), [2]);
assertArraysEqual(without([2], [3]), [2]);
assertArraysEqual(without([2], 1), []);
assertArraysEqual(without([2], undefined), []);
assertArraysEqual(without([], [1]), []);
assertArraysEqual(without([], []), []);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);