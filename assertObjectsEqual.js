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

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  } else {
    for (const key of object1Keys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  } return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    console.log(`🚩🚩🚩 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`🍀🍀🍀 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);