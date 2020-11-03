const eqObjects = require('../eqObjects');
const { assert } = require('chai');

describe("#eqObjects", () => {
  it("should return true as both objects are the same", () => {
    const aZ = { a: { z: 1 }, b: 2 };
    const Za = { a: { z: 1 }, b: 2 };
    assert.deepEqual(eqObjects(aZ, Za), true);
  });
  it("should return true as both objects are the same, and the function can account for the nested layers", () => {
    const bZ = { a: { z: { y: { x: 0 } } }, b: 2 };
    const Zb = { a: { z: { y: { x: 0 } } }, b: 2 };
    assert.deepEqual(eqObjects(bZ, Zb), true);
  });
  it("should return false as the objects do not have the same contents within the nested layers", () => {
    const aY = { a: { y: 0, z: 1 }, b: 2 };
    const Ya = { a: { x: { y: 1 } }, b: 2 };
    assert.deepEqual(eqObjects(aY, Ya), false);
  });
});