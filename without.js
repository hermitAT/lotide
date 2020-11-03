const without = function(source, itemsToRemove) {
  let removedArray = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      removedArray.push(source[i]);
    }
  }
  return removedArray;
};

module.exports = without;