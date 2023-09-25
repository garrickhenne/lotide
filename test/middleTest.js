const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TESTS
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

// Odd number arrays return single middle.
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);