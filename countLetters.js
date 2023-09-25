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

module.exports = countLetter;