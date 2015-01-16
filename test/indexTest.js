var chai = require('chai');
var should = chai.should();
var index = require('../index');
var resolver = index.resolver;

describe('index test', function () {

  it('should export validate method', function (done) {

    var validate = index.validate;
    should.exist(validate);
    validate.should.be.function;

    done();
  });

  it('should export isValid method', function (done) {

    var isValid = index.isValid;
    should.exist(isValid);
    isValid.should.be.function;

    done();
  });

  it('should export meta version', function (done) {

    var version = index.VERSION;
    should.exist(version);
    done();
  });

});