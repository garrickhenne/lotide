const head = require('../head');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns hello for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });

  it('returns undefined, when given a non-array', () => {
    assert.isUndefined(head(1));
  });

  it('returns undefined, when given an empty array', () => {
    assert.isUndefined(head([]));
  });

  it('returns undefined, when given undefined', () => {
    assert.isUndefined(undefined);
  });
});