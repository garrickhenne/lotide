// The array to work with
// The callback (which Lodash calls "predicate")
// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
const takeUntil = function(array, callback) {
  if (!Array.isArray(array) || typeof callback !== 'function') {
    throw new Error('Please input valid arguments.');
  }

  const returnArray = [];
  for (const item of array) {
    // If callback returns true, break out of loop and return array.
    if (callback(item)) {
      break;
    }

    returnArray.push(item);
  }

  return returnArray;
};

module.exports = takeUntil;

