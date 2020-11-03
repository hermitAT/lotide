const without = require('../without');
const { assert } = require('chai');

describe("#without", () => {
  it("should return a new array containing all elements that did not appear in both arrays", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("should return a new array containing all elements that did not appear in both arrays, type sensitive", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
});