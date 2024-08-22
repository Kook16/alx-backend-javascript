const { expect } = require('chai');
const request = require('request');

describe('Regex Integration Testing', () => {
  describe('GET /', () => {
    const options = {
      url: 'http://localhost:7865',
      method: 'GET',
    };

    it('should respond with welcome message', (done) => {
      request(options, (error, response, body) => {
        expect(body).to.contain('Welcome to the payment system');
        done();
      });
    });

    it('should respond with status code 200', (done) => {
      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe('GET /cart/:id', () => {
    const validIdOptions = {
      url: 'http://localhost:7865/cart/12',
      method: 'GET',
    };

    const invalidIdOptions = {
      url: 'http://localhost:7865/cart/hello', // Invalid id
      method: 'GET',
    };

    it('should respond with text plus id for valid id', (done) => {
      request(validIdOptions, (error, response, body) => {
        if (error) return done(error);
        expect(body).to.contain('Payment methods for cart 12');
        done();
      });
    });

    it('should respond with status code 200 for valid id', (done) => {
      request(validIdOptions, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should respond with status code 404 for invalid id', (done) => {
      request(invalidIdOptions, (error, response, body) => {
        if (error) return done(error);
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});
