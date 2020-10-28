const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`🍀🍀🍀 Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(string) {
  const returnObject = {};

  for (const letter of string) {
    // if letter is not a space, continue through loop
    if (letter !== ' ') {
      // if returnObject contains a property with the same name as the letter, increment up
      if (returnObject[letter]) {
        returnObject[letter] += 1;
      } else {
        // if the property exist yet, set it to equal one
        returnObject[letter] = 1;
      }
    }
  }
  return returnObject;
};

// create a variable to be used in assertEqual function
let result1 = countLetters("lighthouse in the house");

assertEqual(result1["h"], 4); // should pass
assertEqual(result1["e"], 3); // should pass
assertEqual(result1["l"], 2); // should fail