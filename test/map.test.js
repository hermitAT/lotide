const map = require('../map');
const { assert } = require('chai');

describe("#map", () => {
  it("should return an array containing only the first index position from each word in the array", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  });
  it("should return an array containing the lengths of each word in the original array", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word.length);
    assert.deepEqual(results1, [6, 7, 2, 5, 3]);
  });
});