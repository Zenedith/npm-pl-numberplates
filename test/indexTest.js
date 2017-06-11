var chai = require('chai');
var should = chai.should();
var index = require('../index');
var resolver = index.resolver;
var expect = chai.expect;

describe('index test', function () {

  it('should export validate method', function (done) {

    var validate = index.validate;
    should.exist(validate);
    expect(validate).to.be.a('function');
    done();
  });

  it('should export isValid method', function (done) {

    var isValid = index.isValid;
    should.exist(isValid);
    expect(isValid).to.be.a('function');

    done();
  });

  it('should export meta version', function (done) {

    var version = index.VERSION;
    should.exist(version);
    done();
  });

});