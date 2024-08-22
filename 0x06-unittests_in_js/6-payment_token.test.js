const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('async test for function getPaymentTokenFromAPI', () => {
  it('should return an object when passed true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.include({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => done(err));
  });
});
