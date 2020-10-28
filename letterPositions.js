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

const letterPositions = function(string) {
  const returnObject = {};
  
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (letter !== ' ') {
      // if the property doesn't exist yet, create it and create an array
      // containing the index
      if (!Array.isArray(returnObject[letter])) {
        returnObject[letter] = [string.indexOf(letter, i)];
      } else {
        // if returnObject contains a property with the same name as the letter,
        // push the index that the letter is at to an array within that property.
        returnObject[letter].push(string.indexOf(letter, i));
      }
    }
  }
  return returnObject;
};

console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);