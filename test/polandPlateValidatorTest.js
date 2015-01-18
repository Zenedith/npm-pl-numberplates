var polandPlateValidator = require('../lib/polandPlateValidator');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('poland plate validator test', function () {

  it('should validate plate in format AAA 11111', function (done) {
    var plate = 'AAA11111';

    polandPlateValidator.validate(plate, function (err, data) {
      expect(err, plate + ' should be valid').is.false;
      data.plate.should.equal('AAA11111');
      done();
    });
  });

  it('should validate plate in format AAA 11AA', function (done) {
    var plate = 'AAA 11AA';

    polandPlateValidator.validate(plate, function (err, data) {
      expect(err, plate + ' should be valid').is.false;
      data.plate.should.equal('AAA11AA');
      done();
    });
  });

  it('should check if plate AAA 11AA is valid', function (done) {
    var plate = 'pwr 17wq';

    var result = polandPlateValidator.isValid(plate);
    expect(result, plate + ' should be valid').is.true;
    done();
  });

  it('should check if plate AAA 11111 is valid', function (done) {
    var plate = 'AAA11111';

    var result = polandPlateValidator.isValid(plate);
    expect(result, plate + ' should be valid').is.true;
    done();
  });
});