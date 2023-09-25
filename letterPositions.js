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

module.exports = letterPositions;