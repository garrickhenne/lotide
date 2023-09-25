// takes in an object and a value. It should scan the object and return the first key which contains the given value.
// If no key with that given value is found, then it should return undefined.
const findKeyByValue = (searchObject, value) => {
  if (!searchObject || Array.isArray(searchObject) || value === '') return undefined;

  for (const key in searchObject) {
    if (searchObject[key] === value) {
      return key;
    }
  }

  return undefined;
};

module.exports = findKeyByValue;