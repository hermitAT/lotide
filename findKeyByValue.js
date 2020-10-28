const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`🍀🍀🍀 Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  for (const key in obj) {
    if (obj[key] === value) {
      return obj[key];
    }
  }
};



const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);