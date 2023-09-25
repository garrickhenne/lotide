const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects', () => {
  it('returns true for deeply nested objects', () => {
    const deeplyNestedExpected = {
      a: {
        b: {
          c: {
            d: 5
          }
        },
        e: 3
      }
    };
    const copy = JSON.parse(JSON.stringify(deeplyNestedExpected));
    assert.isTrue(eqObjects(deeplyNestedExpected, copy));
  });

  it('returns false for unequal objects', () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });

  it('returns true for objects with no nested objects', () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.isTrue(eqObjects(shirtObject, anotherShirtObject));
  });
});