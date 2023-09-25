const tail = function(arr) {
  if (!Array.isArray(arr)) {
    console.log('Argument should be an array.');
    return undefined;
  }

  if (arr.length < 2) {
    return [];
  }

  return arr.slice(1);
};

module.exports = tail;