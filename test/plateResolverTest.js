var chai = require('chai');
var should = chai.should();
var plateResolver = require('../lib/plateResolver');

var formats = [
  { input: 'XY12345', output: {plate: 'XY 12345', prefix: 'XY', number: '12345'} },
  { input: 'XY1234A', output: {plate: 'XY 1234A', prefix: 'XY', number: '1234A'} },

  { input: 'XY1234A', output: {plate: 'XY 1234A', prefix: 'XY', number: '1234A'} },
  { input: 'XY123AC', output: {plate: 'XY 123AC', prefix: 'XY', number: '123AC'} },
  { input: 'XY1A234', output: {plate: 'XY 1A234', prefix: 'XY', number: '1A234'} },
  { input: 'XY1AC23', output: {plate: 'XY 1AC23', prefix: 'XY', number: '1AC23'} },

  { input: 'XYZA123', output: {plate: 'XYZ A123', prefix: 'XYZ', number: 'A123'} },
  { input: 'XYZ12AC', output: {plate: 'XYZ 12AC', prefix: 'XYZ', number: '12AC'} },
  { input: 'XYZ1A23', output: {plate: 'XYZ 1A23', prefix: 'XYZ', number: '1A23'} },
  { input: 'XYZ12A3', output: {plate: 'XYZ 12A3', prefix: 'XYZ', number: '12A3'} },
  { input: 'XYZ1AC2', output: {plate: 'XYZ 1AC2', prefix: 'XYZ', number: '1AC2'} },
  { input: 'XYZAC12', output: {plate: 'XYZ AC12', prefix: 'XYZ', number: 'AC12'} },
  { input: 'XYZ12345', output: {plate: 'XYZ 12345', prefix: 'XYZ', number: '12345'} },
  { input: 'XYZ1234A', output: {plate: 'XYZ 1234A', prefix: 'XYZ', number: '1234A'} },
  { input: 'XYZ123AC', output: {plate: 'XYZ 123AC', prefix: 'XYZ', number: '123AC'} },
  { input: 'XYZA12C', output: {plate: 'XYZ A12C', prefix: 'XYZ', number: 'A12C'} },
  { input: 'XYZA1CE', output: {plate: 'XYZ A1CE', prefix: 'XYZ', number: 'A1CE'} },

  { input: 'X0ABC', output: {plate: 'X 0ABC', prefix: 'X', number: '0ABC'} },
  { input: 'X0AB1', output: {plate: 'X 0AB1', prefix: 'X', number: '0AB1'} },
  { input: 'X0A12', output: {plate: 'X 0A12', prefix: 'X', number: '0A12'} },

  { input: 'X0ABCD', output: {plate: 'X 0ABCD', prefix: 'X', number: '0ABCD'} },
  { input: 'X0ABC1', output: {plate: 'X 0ABC1', prefix: 'X', number: '0ABC1'} },
  { input: 'X0AB12', output: {plate: 'X 0AB12', prefix: 'X', number: '0AB12'} },

  { input: 'X0ABCDE', output: {plate: 'X 0ABCDE', prefix: 'X', number: '0ABCDE'} },
  { input: 'X0ABCD1', output: {plate: 'X 0ABCD1', prefix: 'X', number: '0ABCD1'} },
  { input: 'X0ABC12', output: {plate: 'X 0ABC12', prefix: 'X', number: '0ABC12'} }
];

describe('plate resolver test', function () {

  formats.forEach(function (data) {
    it('should get plate "' + data.output.plate + '" for ' + data.input, function (done) {

      var formatModel = new plateResolver.getPlate(data.input);
      should.exist(formatModel);
      formatModel.plate.should.be.equal(data.output.plate);
      formatModel.prefix.should.be.equal(data.output.prefix);
      formatModel.number.should.be.equal(data.output.number);

      done();
    });
  });

});

