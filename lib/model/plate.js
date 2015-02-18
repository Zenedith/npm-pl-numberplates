var Plate = function Plate(plate, prefix, number, location) {
  this.plate = plate;
  this.prefix = prefix;
  this.number = number;
  this.location = location;
};

var PlateBuilder = function PlateBuilder() {
  this.plate = null;
  this.prefix = null;
  this.number = null;
  this.location = null;

  var self = this;

  this.withPlate = function (plate) {
    self.plate = plate;
    return self;
  };

  this.withPrefix = function (prefix) {
    self.prefix = prefix;
    return self;
  };

  this.withNumber = function (number) {
    self.number = number;
    return self;
  };

  this.withLocation = function (location) {
    self.location = location;
    return self;
  };

  this.build = function () {
    return new Plate(self.plate, self.prefix, self.number, self.location);
  };

};

module.exports = exports = {
  Plate: Plate,
  PlateBuilder: PlateBuilder
};
