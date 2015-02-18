var chai = require('chai');
var should = chai.should();
var plate = require('../../lib/model/plate');

describe('format model test', function () {

  it('should create model', function (done) {

    var formatModel = new plate.Plate('plate', 'prefix', 'number', {state: 'state', country: 'country'});
    should.exist(formatModel);
    formatModel.plate.should.be.equal('plate');
    formatModel.prefix.should.be.equal('prefix');
    formatModel.number.should.be.equal('number');
    should.exist(formatModel.location);
    formatModel.location.state.should.be.equal('state');
    formatModel.location.country.should.be.equal('country');

    done();
  });

  it('should create model by builder', function (done) {

    var formatModel = new plate.PlateBuilder()
      .withPlate('plate')
      .withPrefix('prefix')
      .withNumber('number')
      .withLocation({state: 'state', country: 'country'})
      .build();

    should.exist(formatModel);
    formatModel.plate.should.be.equal('plate');
    formatModel.prefix.should.be.equal('prefix');
    formatModel.number.should.be.equal('number');
    should.exist(formatModel.location);
    formatModel.location.state.should.be.equal('state');
    formatModel.location.country.should.be.equal('country');

    done();
  });

});