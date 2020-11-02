// test/head.test.js
const head = require('../head');
const { assert } = require('chai');

// TEST CODE

describe("#head", () => {
  it("should return 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });
  it("should return 5 for [5]", () => {
    assert.strictEqual(head([5]), 5);
  });
  it("should return 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});