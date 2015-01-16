var meta = require('./lib/meta');
var polandPlateValidator = require('./lib/polandPlateValidator');

module.exports = {

  isValid: polandPlateValidator.isValid,
  validate: polandPlateValidator.validate,

  /**
   * the version of the library
   * @property VERSION
   * @type String
   * @static
   */
  VERSION: meta.VERSION
};


