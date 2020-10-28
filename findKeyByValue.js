const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`🍀🍀🍀 Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKeyByValue = function(object, value) {

  for (const item in object) {
    if (object[item] === value) {
      return item;
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
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "drama"); // this one should fail, all else should pass
