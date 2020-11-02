const tail = require('../tail');
const { assert } = require('chai');

// TEST CODE

describe("#tail", () => {
  it("should return the array with the first item removed", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("should return an empty array when used on an array with one element", () => {
    assert.deepEqual(tail(["Hello"]), []);
  });
  it("should return an empty array when used on an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});