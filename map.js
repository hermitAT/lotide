const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const map = (array, callback) => {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
assertArraysEqual(map(words, word => word[0].toUpperCase()), ['G', 'C', 'T', 'M', 'T']);