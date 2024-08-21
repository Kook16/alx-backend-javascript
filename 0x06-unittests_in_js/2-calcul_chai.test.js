const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function () {
  it('should return 6 when type is SUM', function () {
    expect(calculateNumber('SUM', 1, 5)).to.equal(6);
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUM', 1.4444, 4.555)).to.equal(6);
  });

  it('should return -4 when type is SUBTRACT', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return 0.2 when type is DIVIDE', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should return "Error" when dividing by zero', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('should return 0 when dividing zero by a number', function () {
    expect(calculateNumber('DIVIDE', 0, 1)).to.equal(0);
  });
});
