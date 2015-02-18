var plateResolver = require('./plateResolver');

var prepareInput = function (input) {
  input = input || '';
  input = input.trim().toUpperCase();
  input = input.replace(' ', '');
  input = input.replace("\r", '');
  input = input.replace("\n", '');

  return input.replace(/[\W\s]+/g, '');
};

module.exports.validate = function (input, callback) {
  var reg = prepareInput(input);
  var plate = plateResolver.getPlate(reg);
  var err = null;

  if (!plate) {
    err = new Error('Invalid plate number');
  }

  return callback(err, plate);
};

module.exports.isValid = function (input) {
  var reg = prepareInput(input);
  var plate = plateResolver.getPlate(reg);
  return plate ? true : false;
};