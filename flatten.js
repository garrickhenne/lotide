// Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
const flatten = function(arr) {
  if (!Array.isArray(arr)) {
    console.log('Please provide an array.');
    return undefined;
  }

  let flattenedArray = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      flattenedArray = flattenedArray.concat(flatten(item));
    } else {
      flattenedArray.push(item);
    }
  }

  return flattenedArray;
};

module.exports = flatten;