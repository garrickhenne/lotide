// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  if (!Array.isArray(arr)) {
    console.log('Arguement should be an array.');
    return undefined;
  }

  if (arr.length < 2) {
    return [];
  }

  return arr.slice(1);
};




// Test Case: Check the original array.
const words = [ "Yo Yo", "Lighthouse", "Labs" ];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
const tailWords = tail(words);
assertEqual(tailWords[ 0 ], 'Lighthouse');
assertEqual(tailWords[ 1 ], 'Labs');

// Other scenarios:
// An array with only one element should yield an empty array for its tail
const test2 = tail([ 'one' ]);
assertEqual(Array.isArray(test2), true);
assertEqual(test2[ 0 ], undefined);
// An empty array should yield an empty array for its tail
const test3 = tail([]);
assertEqual(Array.isArray(test3), true);
assertEqual(test3[ 0 ], undefined);

// Not an array.
assertEqual(tail(1), undefined);