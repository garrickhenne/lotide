const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Given a sentence in a string, return an object containing a count of the letters in the sentence.
// Assumptions:
//    We will only keep count of one case of letters, ie. 'LLl' would return an object { l: 3 } and not have a seperate key for L.
const countLetter = (sentence) => {
  const letterCount = {};
  // Return empty object if empty sentence or not a string.
  if (!sentence || typeof sentence !== 'string') return letterCount;

  for (const letter of sentence) {
    // Skip over white-space. We could probably add more validation in the future.
    if (letter === ' ') continue;

    const formatLetter = letter.toLowerCase();
    if (letterCount[formatLetter]) {
      letterCount[formatLetter]++;
    } else {
      letterCount[formatLetter] = 1;
    }
  }

  return letterCount;
};

// TESTS
const firstExpected = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};
const firstActual = countLetter('lighthouse in the house');
assertEqual(firstActual['l'], firstExpected['l']);
assertEqual(firstActual['i'], firstExpected['i']);
assertEqual(firstActual['g'], firstExpected['g']);
assertEqual(firstActual['h'], firstExpected['h']);
assertEqual(firstActual['t'], firstExpected['t']);
assertEqual(firstActual['o'], firstExpected['o']);
assertEqual(firstActual['u'], firstExpected['u']);
assertEqual(firstActual['s'], firstExpected['s']);
assertEqual(firstActual['e'], firstExpected['e']);
assertEqual(firstActual['n'], firstExpected['n']);

const secondExpected = {
  l: 2,
  h: 1
};
const secondActual = countLetter('LHL');
assertEqual(secondActual['l'], secondExpected['l']);
assertEqual(secondActual['h'], secondExpected['h']);

const thirdExpected = {
  '1': 3,
  '2': 2
};
const thirdActual = countLetter('11122');
assertEqual(thirdActual['1'], thirdExpected['1']);
assertEqual(thirdActual['2'], thirdExpected['2']);

console.log(countLetter());
console.log(countLetter(1));
console.log(countLetter(true));