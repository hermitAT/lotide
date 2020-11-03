const countOnly = function(allItems, itemsToCount) {
  const returnObject = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (returnObject[item]) {
        returnObject[item] += 1;
      } else {
        returnObject[item] = 1;
      }
    }
  }
  return returnObject;
};

module.exports = countOnly;