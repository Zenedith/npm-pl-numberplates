var polandPlateValidator = require('../lib/polandPlateValidator');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('poland plate validator test', function () {

  it('should validate plate in format PAA 11111', function (done) {
    var plate = 'PAA11111';

    polandPlateValidator.validate(plate, function (err, data) {
      expect(err, plate + ' should be valid').is.null;
      data.plate.should.equal('PAA 11111');
      data.location.state.should.equal('wielkopolskie');
      done();
    });
  });

  it('should validate plate in format PAA 11AA', function (done) {
    var plate = 'PAA 11AA';

    polandPlateValidator.validate(plate, function (err, data) {
      expect(err, plate + ' should be valid').is.null;
      data.plate.should.equal('PAA 11AA');
      data.location.state.should.equal('wielkopolskie');
      done();
    });
  });

  it('should check if plate PAA 11AA is valid', function (done) {
    var plate = 'pwr 17wq';

    var result = polandPlateValidator.isValid(plate);
    expect(result, plate + ' should be valid').is.true;
    done();
  });

  it('should check if plate PAA 11111 is valid', function (done) {
    var plate = 'PAA11111';

    var result = polandPlateValidator.isValid(plate);
    expect(result, plate + ' should be valid').is.true;
    done();
  });
});