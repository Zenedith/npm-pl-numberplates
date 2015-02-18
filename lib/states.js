//http://pl.wikipedia.org/wiki/Polskie_tablice_rejestracyjne
var states = {
  B: 'podlaskie',
  C: 'kujawsko-pomorskie',
  D: 'dolnośląskie',
  E: 'łódzkie',
  F: 'lubuskie',
  G: 'pomorskie',
  K: 'małopolskie',
  L: 'lubelskie',
  N: 'warmińsko-mazurskie',
  O: 'opolskie',
  P: 'wielkopolskie',
  R: 'podkarpackie',
  S: 'śląskie',
  T: 'świętokrzyskie',
  W: 'mazowieckie',
  Z: 'zachodniopomorskie'
};

module.exports.getState = function getState(input) {
  var state = input.charAt(0);

  if (states.hasOwnProperty(state)) {
    return states[state];
  }

  return null;
};
