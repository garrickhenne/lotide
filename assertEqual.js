// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
/*
Comparing identical strings
Comparing non-identical strings
Comparing identical numbers
Comparing non-identical numbers
*/
assertEqual('Lighthouse Labs', 'Lighthouse Labs'); // true
assertEqual("Lighthouse Labs", "Bootcamp"); // false
assertEqual(1, 1); // true
assertEqual(2, 1); // false