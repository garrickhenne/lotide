const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2]); // => Should return false
assertArraysEqual(1, [1]); // output log
assertArraysEqual([1], 1); // output log
assertArraysEqual(['hello', 'motto'], ['hello', 'motto']);
assertArraysEqual(['hello', 'motto'], ['hello', 'mott']);