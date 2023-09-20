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

const letterPositions = function(sentence) {
  const results = {};
  // Return empty object if empty sentence or not a string.
  if (!sentence || typeof sentence !== 'string') return results;

  // Convert string into array of characters in sentence.
  const sentenceArray = sentence.split('');

  sentenceArray.forEach(function(letter, index) {
    if (letter === ' ') {
      return;
    }

    const formatLetter = letter.toLowerCase();
    if (results[formatLetter]) {
      results[formatLetter].push(index);
    } else {
      results[formatLetter] = [index];
    }
  });

  return results;
};

// TESTS
const actual1 = letterPositions('hello');
const expected1 = {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4]
};
assertArraysEqual(actual1['h'], expected1['h']);
assertArraysEqual(actual1['e'], expected1['e']);
assertArraysEqual(actual1['l'], expected1['l']);
assertArraysEqual(actual1['o'], expected1['o']);

const actual2 = letterPositions('lighthouse in the house');
const expected2 = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};
assertArraysEqual(actual2['l'], expected2['l']);
assertArraysEqual(actual2['i'], expected2['i']);
assertArraysEqual(actual2['g'], expected2['g']);
assertArraysEqual(actual2['h'], expected2['h']);
assertArraysEqual(actual2['t'], expected2['t']);
assertArraysEqual(actual2['o'], expected2['o']);
assertArraysEqual(actual2['u'], expected2['u']);
assertArraysEqual(actual2['s'], expected2['s']);
assertArraysEqual(actual2['e'], expected2['e']);
assertArraysEqual(actual2['n'], expected2['n']);