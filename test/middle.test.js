const middle = require('../middle');
const { assert } = require('chai');

// TEST CODE

describe("#middle", () => {
  it("should return empty array for array with one element", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("should return empty array for array with two elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should return only the middle item: [2] for an array with 3 elements: [1,2,3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("should return only the middle item for an array with an odd number of elements (ex. 5 items)", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("should return an array of two items for an array with an even number of items (ex. 4 items)", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return the two middle items for an array of even numbers (ex. 6+ items)", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});