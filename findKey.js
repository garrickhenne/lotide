const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callback) => {
  if (typeof obj !== 'object' || typeof callback !== 'function') throw new Error('Please provide valid arguments.');

  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(result1, 'noma');

const result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 60); // => undefined.

assertEqual(result2, undefined);

const result3 = findKey({
  "Blue Hill": {
    stars: 1,
    visited: false
  },
  "Akaleri": {
    stars: 3,
    visited: true
  },
}, x => x.visited); // => Akaleri.

assertEqual(result3, 'Akaleri');