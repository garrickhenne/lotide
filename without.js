const without = function(originalArray, removalValues) {
  if (!Array.isArray(removalValues) || !Array.isArray(originalArray)) {
    return [];
  }

  let filteredArray = [];
  for (const item of originalArray) {
    if (!removalValues.includes(item)) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
};

module.exports = without;