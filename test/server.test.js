var request = require('supertest');
var app = require('../server');

describe('When I request / with GET', function() {
  it('should return a 200 status code', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('should return html', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/, done);
  });
});
