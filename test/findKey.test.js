const findKey = require('../findKey');
const { assert } = require('chai');

describe("#findKey", () => {
  it("should return 'noma' as the first 'stars' key that contains the value 2", () => {
    let results1 = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2);
    assert.strictEqual(results1, "noma");
  });
  it("should return 'Akaleri' as the first 'stars' key with the value 3", () => {
    let results2 = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 3);
    assert.strictEqual(results2, "Akaleri");
  });
  it("should return undefined as there is no 'stars' key with the value 0", () => {
    let results3 = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 0);
    assert.strictEqual(results3, undefined);
  });
});