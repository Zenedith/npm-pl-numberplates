var chai = require('chai');
var should = chai.should();
var location = require('../../lib/model/location');

describe('location model test', function () {

  it('should create model', function (done) {

    var locationModel = new location.Location('wielkopolskie', 'pl-PL');
    should.exist(locationModel);
    locationModel.state.should.be.equal('wielkopolskie');
    locationModel.country.should.be.equal('pl-PL');

    done();
  });

  it('should create model by builder', function (done) {

    var locationModel = new location.LocationBuilder()
      .withState('wielkopolskie')
      .withCountry('pl-PL')
      .build();

    should.exist(locationModel);
    locationModel.state.should.be.equal('wielkopolskie');
    locationModel.country.should.be.equal('pl-PL');

    done();
  });

});