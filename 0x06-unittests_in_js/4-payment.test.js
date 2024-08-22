const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', () => {
  let stubCalculateNumber;
  let spyConsoleLog;

  beforeEach(() => {
    // Stub Utils.calculateNumber to always return 10
    stubCalculateNumber = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Spy on console.log to verify the output
    spyConsoleLog = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and spy after each test
    stubCalculateNumber.restore();
    spyConsoleLog.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, 20 and log the correct total', () => {
    sendPaymentRequestToApi(100, 20);

    expect(stubCalculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be
      .true;
    expect(spyConsoleLog.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
