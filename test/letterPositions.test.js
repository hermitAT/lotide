const letterPositions = require('../letterPositions');
const { assert } = require('chai');

describe("#letterPositions", () => {
  it("should return index position 1 for the first instance of the letter 'e'", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("should return index position 6 for the first instance of the letter 't'", () => {
    assert.deepEqual(letterPositions("hello there").t, [6]);
  });
});