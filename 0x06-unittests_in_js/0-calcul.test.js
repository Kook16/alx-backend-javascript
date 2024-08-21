const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return 4 when adding 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when adding 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when adding 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when adding 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // New tests

  it('handles first arg when it is a float', () => {
    assert.strictEqual(calculateNumber(1.0, 0), 1);
    assert.strictEqual(calculateNumber(9.0, 0), 9);
    assert.strictEqual(calculateNumber(555.0, 0), 555);
  });

  it('handles second arg when it is a float', () => {
    assert.strictEqual(calculateNumber(0, 1.0), 1);
    assert.strictEqual(calculateNumber(0, 9.0), 9);
    assert.strictEqual(calculateNumber(0, 555.0), 555);
  });

  it('rounds first arg down to nearest number', () => {
    assert.strictEqual(calculateNumber(1.1, 0), 1);
    assert.strictEqual(calculateNumber(1.2, 0), 1);
    assert.strictEqual(calculateNumber(1.4, 0), 1);
  });

  it('rounds second arg down to nearest number', () => {
    assert.strictEqual(calculateNumber(0, 1.1), 1);
    assert.strictEqual(calculateNumber(0, 1.2), 1);
    assert.strictEqual(calculateNumber(0, 1.4), 1);
  });

  it('rounds first arg up to nearest number', () => {
    assert.strictEqual(calculateNumber(1.6, 0), 2);
    assert.strictEqual(calculateNumber(1.7, 0), 2);
    assert.strictEqual(calculateNumber(1.9, 0), 2);
  });

  it('rounds second arg up to nearest number', () => {
    assert.strictEqual(calculateNumber(0, 1.6), 2);
    assert.strictEqual(calculateNumber(0, 1.9), 2);
    assert.strictEqual(calculateNumber(0, 1.7), 2);
  });

  it('rounds both args', () => {
    assert.strictEqual(calculateNumber(1.4, 1.3), 2);
    assert.strictEqual(calculateNumber(1.1, 1.3), 2);
    assert.strictEqual(calculateNumber(1.9, 1.3), 3);
  });

  it('rounds correctly for longer fractions', () => {
    assert.strictEqual(calculateNumber(1.41112, 1.3), 2);
    assert.strictEqual(calculateNumber(1.11212, 1.3), 2);
    assert.strictEqual(calculateNumber(1.9322212, 1.3), 3);
  });

  it('returns a number', () => {
    assert.strictEqual(typeof calculateNumber(1.41112, 1.3123212), 'number');
    assert.strictEqual(typeof calculateNumber(1.11212, 1.31212), 'number');
    assert.strictEqual(typeof calculateNumber(1.9322212, 1.31212), 'number');
  });
});
