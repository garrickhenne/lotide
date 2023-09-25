const middle = (arr) => {
  if (!Array.isArray(arr) || arr.length <= 2) return [];

  const middleIndex = arr.length / 2;
  const roundedDown = Math.floor(middleIndex);

  return Number.isInteger(middleIndex) ? [arr[roundedDown - 1], arr[roundedDown]] : [arr[roundedDown]];
};

module.exports = middle;




