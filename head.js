const assertEqual = require('./assertEqual');

const head = function(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    console.log('An array was not passed in or was empty.');
    return undefined;
  }

  return arr[0];
};

module.exports = head;