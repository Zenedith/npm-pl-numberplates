var plateModel = require('../lib/model/plate');
var locationModel = require('../lib/model/location');
var states = require('../lib/states');
var formats = require('../lib/formats');

module.exports.getPlate = function (input) {
  var format = formats.getFormat(input);

  if (!format) {
    return null;
  }

  var separatorIndex = format.charAt(0);

  var prefix = input.substr(0, separatorIndex);
  var number = input.substr(separatorIndex);
  var plate = prefix + ' ' + number;

  var state = states.getState(plate);
  var location = null;

  if (state) {
    new locationModel.LocationBuilder()
      .withState(state)
      .withCountry('pl-PL')
      .build();
  }

  return new plateModel.PlateBuilder()
    .withPlate(plate)
    .withPrefix(prefix)
    .withNumber(number)
    .withLocation(location)
    .build();

};

