const findKey = (obj, callback) => {
  if (typeof obj !== 'object' || typeof callback !== 'function') throw new Error('Please provide valid arguments.');

  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;