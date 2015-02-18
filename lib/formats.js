//http://pl.wikipedia.org/wiki/Polskie_tablice_rejestracyjne
var formats = [];

formats['2CT5D'] = '[A-Z]{2}[0-9]{5}';	// XY 12345
formats['2CT4D1C'] = '[A-Z]{2}[0-9]{4}[A-Z]{1}';	// XY 1234A
formats['2CT3D2C'] = '[A-Z]{2}[0-9]{3}[A-Z]{2}';	// XY 123AC
formats['2CT1D1C3D'] = '[A-Z]{2}[0-9]{1}[A-Z]{1}[0-9]{3}';	// XY 1A234
formats['2CT1D2C2D'] = '[A-Z]{2}[0-9]{1}[A-Z]{2}[0-9]{2}';	// XY 1AC23

formats['3CT1C3D'] = '[A-Z]{4}[0-9]{3}';	// XYZ A123
formats['3CT2D2C'] = '[A-Z]{3}[0-9]{2}[A-Z]{2}';	// XYZ 12AC
formats['3CT1D1C2D'] = '[A-Z]{3}[0-9]{1}[A-Z]{1}[0-9]{2}';	// XYZ 1A23
formats['3CT2D1C1D'] = '[A-Z]{3}[0-9]{2}[A-Z]{1}[0-9]{1}';	// XYZ 12A3
formats['3CT1D2C1D'] = '[A-Z]{3}[0-9]{1}[A-Z]{2}[0-9]{1}';	// XYZ 1AC2
formats['3CT2C2D'] = '[A-Z]{5}[0-9]{2}';	// XYZ AC12
formats['3CT5D'] = '[A-Z]{3}[0-9]{5}';	// XYZ 12345
formats['3CT4D1C'] = '[A-Z]{3}[0-9]{4}[A-Z]{1}';	// XYZ 1234A
formats['3CT3D2C'] = '[A-Z]{3}[0-9]{3}[A-Z]{2}';	// XYZ 123AC
formats['3CT1C2D1C'] = '[A-Z]{4}[0-9]{2}[A-Z]{1}';	// XYZ A12C
formats['3CT1C1D2C'] = '[A-Z]{4}[0-9]{1}[A-Z]{2}';	// XYZ A1CE

formats['2CT2D1C'] = '[A-Z]{2}[0-9]{2}[A-Z]{1}';	// HIST2-1
formats['2CT3D'] = '[A-Z]{2}[0-9]{3}';	// HIST2-2

formats['3CT1D1C'] = '[A-Z]{3}[0-9]{1}[A-Z]{1}';	// HIST3-1
formats['3CT2D'] = '[A-Z]{3}[0-9]{2}';	// HIST3-2
formats['3CT1C1D'] = '[A-Z]{4}[0-9]{1}';	// HIST3-2

formats['1CT1D3C'] = '[A-Z]{1}[0-9]{1}[A-Z]{3}';	// X0 ABC
formats['1CT1D2C1D'] = '[A-Z]{1}[0-9]{1}[A-Z]{2}[0-9]{1}';	// X0 AB1
formats['1CT1D1C1D'] = '[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{2}';	// X0 A12

formats['1CT1D4C'] = '[A-Z]{1}[0-9]{1}[A-Z]{4}';	// X0 ABCD
formats['1CT1D3C1D'] = '[A-Z]{1}[0-9]{1}[A-Z]{3}[0-9]{1}';	// X0 ABC1
formats['1CT1D2C2D'] = '[A-Z]{1}[0-9]{1}[A-Z]{2}[0-9]{2}';	// X0 AB12

formats['1CT1D5C'] = '[A-Z]{1}[0-9]{1}[A-Z]{5}';	// X0 ABCDE
formats['1CT1D4C1D'] = '[A-Z]{1}[0-9]{1}[A-Z]{4}[0-9]{1}';	// X0 ABCD1
formats['1CT1D3C2D'] = '[A-Z]{1}[0-9]{1}[A-Z]{3}[0-9]{2}';	// X0 ABC12


module.exports.getFormat = function (input) {
  for (var k in formats) {
    if (formats.hasOwnProperty(k)) {
      var v = '^' + formats[k] + '$';
      if (input.match(String(v))) {
        return k;
      }
    }
  }
};

