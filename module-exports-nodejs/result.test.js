const should = require('chai').should();
var result = require('./result').result
// TODO: import your result here properly so that the test runs

describe('handle exports and import in node js to spit out the right result', function () {
  it('test', function () {
    result.should.equal('hello world !');
  });
});
