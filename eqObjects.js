const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`🍀🍀🍀 Assertion Passed: ${actual} === ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  } else {
    for (const key of object1Keys) {
      if (!Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
        return eqObjects(object1[key], object2[key]);
      } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        return false;
      }
      
    }
  } return true;
};

const aZ = { a: { z: 1 }, b: 2 };
const Za = { a: { z: 1 }, b: 2 };
eqObjects(aZ, Za); // => true

assertEqual(eqObjects(aZ, Za), true);

const bZ = { a: { z: { y: { x: 0 } } }, b: 2 };
const Zb = { a: { z: { y: { x: 0 } } }, b: 2 };
eqObjects(bZ, Zb); // => true

assertEqual(eqObjects(bZ, Zb), true);

const aY = { a: { y: 0, z: 1 }, b: 2 };
const Ya = { a: { x: { y: 1 } }, b: 2 };
eqObjects(aY, Ya); // => false

assertEqual(eqObjects(aY, Ya), false);