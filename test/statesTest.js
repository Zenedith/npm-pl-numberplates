var chai = require('chai');
var should = chai.should();
var states = require('../lib/states');

var statesData = [
  { input: 'BY12345', output: 'podlaskie' },
  { input: 'CY12345', output: 'kujawsko-pomorskie' },
  { input: 'DY12345', output: 'dolnośląskie' },
  { input: 'EY12345', output: 'łódzkie' },
  { input: 'FY12345', output: 'lubuskie' },
  { input: 'GY12345', output: 'pomorskie' },
  { input: 'KY12345', output: 'małopolskie' },
  { input: 'LY12345', output: 'lubelskie' },
  { input: 'NY12345', output: 'warmińsko-mazurskie' },
  { input: 'OY12345', output: 'opolskie' },
  { input: 'PY12345', output: 'wielkopolskie' },
  { input: 'RY12345', output: 'podkarpackie' },
  { input: 'SY12345', output: 'śląskie' },
  { input: 'TY12345', output: 'świętokrzyskie' },
  { input: 'WY12345', output: 'mazowieckie' },
  { input: 'ZY12345', output: 'zachodniopomorskie' }
];

describe('states test', function () {

  statesData.forEach(function (data) {
    it('should get state "' + data.output + '" from ' + data.input, function (done) {

      var stateName = states.getState(data.input);
      should.exist(stateName);
      stateName.should.be.equal(data.output);

      done();
    });
  });

});

