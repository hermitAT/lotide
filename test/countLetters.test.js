const countLetters = require('../countLetters');
const { assert } = require('chai');

describe("#countLetters", () => {
  it("should return 4 for the number of h's in the phrase 'lighthouse in the house'", () => {
    const result1 = countLetters("lighthouse in the house");
    assert.strictEqual(result1["h"], 4);
  });
  it("should return 3 for the number of e's in the phrase 'lighthouse in the house'", () => {
    const result1 = countLetters("lighthouse in the house");
    assert.strictEqual(result1["e"], 3);
  });
  it("should return 2 for the number of o's in the phrase 'lighthouse in the house'", () => {
    const result1 = countLetters("lighthouse in the house");
    assert.strictEqual(result1["o"], 2);
  });
});