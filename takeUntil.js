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
    console.log(`Given: ${arr1} \n Expected: ${arr2}`);
  }
};

// ===================================

// The array to work with
// The callback (which Lodash calls "predicate")
// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
const takeUntil = function(array, callback) {
  if (!Array.isArray(array) || typeof callback !== 'function') {
    throw new Error('Please input valid arguments.');
  }

  const returnArray = [];
  for (const item of array) {
    // If callback returns true, break out of loop and return array.
    if (callback(item)) {
      break;
    }

    returnArray.push(item);
  }

  return returnArray;
};

// TESTS
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']);

// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

const data3 = [];
const results3 = takeUntil(data3, x => x === ',');
console.log(results3);
assertArraysEqual(results3, []);

const data4 = [1, 2, 3, 4, 5];
const results4 = takeUntil(data4, x => x === '5');
console.log(results4);
assertArraysEqual(results4, [1, 2, 3, 4, 5]);

// Uncomment to test.
// const data5 = 'hello';
// takeUntil(data5, x => x === '5'); // Throws error.

// const data6 = [1, 2, 3];
// takeUntil(data6, 5); // Throws error.

