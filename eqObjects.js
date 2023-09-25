const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (const key in object1) {
    if (object1[key] !== object2[key]) {
      // Value may be array so check eqArrays if so.
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object' && object1[key] !== null && object2[key] !== null) {
        // Value may be another object so check recursively.
        return eqObjects(object1[key], object2[key]);
      }
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;