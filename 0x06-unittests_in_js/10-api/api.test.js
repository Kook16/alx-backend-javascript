const { expect } = require('chai');
const request = require('request');

describe('API Integration Testing', () => {
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

  describe('GET /available_payments', () => {
    const options = {
      url: 'http://localhost:7865/available_payments',
      method: 'GET',
    };

    it('should respond with json data', (done) => {
      request(options, (error, response, body) => {
        if (error) return done(error);
        const parsedBody = JSON.parse(body);
        expect(parsedBody).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
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

  describe('POST /login', () => {
    const options = {
      url: 'http://localhost:7865/login',
      json: { userName: 'Betty' },
      method: 'POST',
    };

    it('should accept json data and return 200 status code', (done) => {
      request(options, (error, response, body) => {
        if (error) return done(error);
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return a welcome message with the username', (done) => {
      request(options, (error, response, body) => {
        if (error) return done(error);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });
});
