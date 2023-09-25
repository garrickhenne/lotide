const assertEqual = require('../assertEqual');
const head = require('../head');

// TESTS
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
assertEqual(head(1), undefined);
assertEqual(head([]), undefined);
assertEqual(head([1]), 1);
assertEqual(head(undefined), undefined);