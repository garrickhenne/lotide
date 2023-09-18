// FYI: I hate doing this rather than import.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    console.log('An array was not passed in or was empty.');
    return undefined;
  }

  return arr[ 0 ];
};

// TESTS
assertEqual(head([ 5, 6, 7 ]), 5);
assertEqual(head([ 'Hello', 'Lighthouse', 'Labs' ]), 'Hello');
assertEqual(head(1), undefined);
assertEqual(head([]), undefined);
assertEqual(head([ 1 ]), 1);
assertEqual(head(undefined), undefined);