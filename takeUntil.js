const takeUntil = (array, callback) => {
  let passedValues = [];
  for (const item of array) {
    if (!callback(item)) {
      passedValues.push(item);
    } else {
      return passedValues;
    }
  }
};

module.exports = takeUntil;
