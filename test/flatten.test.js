const flatten = require('../flatten');
const { assert } = require('chai');

describe("#flatten", () => {
  it("should return an array without any nesting, but with the same contents", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("should return an array with the same contents and the single nested layer removed", () => {
    assert.deepEqual(flatten([1, 2, 3, 4, [5, 6, 7]]), [1, 2, 3, 4, 5, 6, 7]);
  });
});