const middle = (array) => {
  let middleElements = [];
  const midPoint = Math.floor(array.length / 2);

  if (array.length <= 2) {
    return middleElements;
  } else if (array.length % 2 === 0) {
    middleElements.push(array[midPoint - 1], array[midPoint]);
  } else if (array.length % 2 !== 0) {
    middleElements.push(array[midPoint]);
  }
  return middleElements;
};

module.exports = middle;