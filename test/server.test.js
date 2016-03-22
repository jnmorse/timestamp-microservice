var request = require('supertest');
var app = require('../server');

describe('When I make a GET request to /', function() {
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

describe('When I make a GET request to /:date ', function() {
  describe('And I call it with January%206,1980', function() {
    it('should return JSON', function(done) {
      request(app)
        .get('/January%206,%201980')
        .expect('Content-Type', /json/, done);
    });

    it('should return {unix: 315964800, natural: "January 6, 1980"}', function(done) {
      request(app)
        .get('/January%206,%201980')
        .expect({ unix: 315982800, natural: 'January 6, 1980' }, done);
    });
  });

  describe('And I call it with hello', function() {
    it('should return {unix: null, natural: null}', function(done) {
      request(app)
        .get('/hello')
        .expect({ unix: null, natural: null }, done);
    });
  });

  describe('And I call it with 315982800', function() {
    it('should return {unix: 315982800, natural: "January 6, 1980"}', function(done) {
      request(app)
        .get('/315982800000')
        .expect({ unix: 315982800, natural: 'January 6, 1980' }, done);
    });
  });
});
