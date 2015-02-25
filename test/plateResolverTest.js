var chai = require('chai');
var should = chai.should();
var plateResolver = require('../lib/plateResolver');

var formats = [
  { input: 'BY12345', output: {plate: 'BY 12345', prefix: 'BY', number: '12345', state: 'podlaskie'} },
  { input: 'CY1234A', output: {plate: 'CY 1234A', prefix: 'CY', number: '1234A', state: 'kujawsko-pomorskie'} },

  { input: 'DY1234A', output: {plate: 'DY 1234A', prefix: 'DY', number: '1234A', state: 'dolnośląskie'} },
  { input: 'EY123AC', output: {plate: 'EY 123AC', prefix: 'EY', number: '123AC', state: 'łódzkie'} },
  { input: 'FY1A234', output: {plate: 'FY 1A234', prefix: 'FY', number: '1A234', state: 'lubuskie'} },
  { input: 'GY1AC23', output: {plate: 'GY 1AC23', prefix: 'GY', number: '1AC23', state: 'pomorskie'} },

  { input: 'KYZA123', output: {plate: 'KYZ A123', prefix: 'KYZ', number: 'A123', state: 'małopolskie'} },
  { input: 'LYZ12AC', output: {plate: 'LYZ 12AC', prefix: 'LYZ', number: '12AC', state: 'lubelskie'} },
  { input: 'NYZ1A23', output: {plate: 'NYZ 1A23', prefix: 'NYZ', number: '1A23', state: 'warmińsko-mazurskie'} },
  { input: 'OYZ12A3', output: {plate: 'OYZ 12A3', prefix: 'OYZ', number: '12A3', state: 'opolskie'} },
  { input: 'PYZ1AC2', output: {plate: 'PYZ 1AC2', prefix: 'PYZ', number: '1AC2', state: 'wielkopolskie'} },
  { input: 'RYZAC12', output: {plate: 'RYZ AC12', prefix: 'RYZ', number: 'AC12', state: 'podkarpackie'} },
  { input: 'SYZ12345', output: {plate: 'SYZ 12345', prefix: 'SYZ', number: '12345', state: 'śląskie'} },
  { input: 'TYZ1234A', output: {plate: 'TYZ 1234A', prefix: 'TYZ', number: '1234A', state: 'świętokrzyskie'} },
  { input: 'WYZ123AC', output: {plate: 'WYZ 123AC', prefix: 'WYZ', number: '123AC', state: 'mazowieckie'} },
  { input: 'ZYZA12C', output: {plate: 'ZYZ A12C', prefix: 'ZYZ', number: 'A12C', state: 'zachodniopomorskie'} },
  { input: 'BYZA1CE', output: {plate: 'BYZ A1CE', prefix: 'BYZ', number: 'A1CE', state: 'podlaskie'} },

  { input: 'C0ABC', output: {plate: 'C 0ABC', prefix: 'C', number: '0ABC', state: 'kujawsko-pomorskie'} },
  { input: 'D0AB1', output: {plate: 'D 0AB1', prefix: 'D', number: '0AB1', state: 'dolnośląskie'} },
  { input: 'E0A12', output: {plate: 'E 0A12', prefix: 'E', number: '0A12', state: 'łódzkie'} },

  { input: 'F0ABCD', output: {plate: 'F 0ABCD', prefix: 'F', number: '0ABCD', state: 'lubuskie'} },
  { input: 'G0ABC1', output: {plate: 'G 0ABC1', prefix: 'G', number: '0ABC1', state: 'pomorskie'} },
  { input: 'K0AB12', output: {plate: 'K 0AB12', prefix: 'K', number: '0AB12', state: 'małopolskie'} },

  { input: 'L0ABCDE', output: {plate: 'L 0ABCDE', prefix: 'L', number: '0ABCDE', state: 'lubelskie'} },
  { input: 'N0ABCD1', output: {plate: 'N 0ABCD1', prefix: 'N', number: '0ABCD1', state: 'warmińsko-mazurskie'} },
  { input: 'O0ABC12', output: {plate: 'O 0ABC12', prefix: 'O', number: '0ABC12', state: 'opolskie'} },

  { input: 'PY1234', output: {plate: 'PY 1234', prefix: 'PY', number: '1234', state: 'wielkopolskie'} },
  { input: 'RY123A', output: {plate: 'RY 123A', prefix: 'RY', number: '123A', state: 'podkarpackie'} }
];

describe('plate resolver test', function () {

  formats.forEach(function (data) {
    it('should get plate "' + data.output.plate + '" for ' + data.input, function (done) {

      var formatModel = new plateResolver.getPlate(data.input);
      should.exist(formatModel);
      formatModel.plate.should.be.equal(data.output.plate);
      formatModel.prefix.should.be.equal(data.output.prefix);
      formatModel.number.should.be.equal(data.output.number);
      formatModel.location.state.should.be.equal(data.output.state);
      formatModel.location.country.should.be.equal('PL');

      done();
    });
  });

});

