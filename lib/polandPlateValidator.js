var prepareInput = function (input) {
  input = input || '';
  input = input.trim().toUpperCase();
  input = input.replace(' ', '');
  input = input.replace("\r", '');
  input = input.replace("\n", '');

  return input.replace(/[\W\s]+/g, '');
};

var regex = function (reg) {
  return /^[a-zA-Z]{3}[ -]?\d{2}[a-zA-Z]{2}$/.test(reg) ||
    /^[a-zA-Z]{3}[ -]?[a-zA-Z0-9]{4,5}$/.test(reg) ||
    /^[a-zA-Z]\d[ -]?[a-zA-Z0-9]{4,5}$/.test(reg);
};

module.exports.validate = function (input, callback) {
  var reg = prepareInput(input);

  var err = false;						// ERROR CODE :
  // false = OK
  // 1 = UNKNOWN FORMAT
  // 2 = INVALID CHARS
  // 3 = ASTERISK IN REG

  var data = {
    plate: reg,
    plateFormat: null
  };

  var valid = regex(reg);

  if (!valid) {
    err = 1;
  }

  return callback(err, data);
};

module.exports.isValid = function (input) {
  var reg = prepareInput(input);
  return regex(reg);
};