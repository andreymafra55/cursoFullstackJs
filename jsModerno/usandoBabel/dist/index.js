"use strict";

var mediaAritimetica = function mediaAritimetica() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var soma = numbers.reduce(function (accum, num) {
    return accum + num;
  }, 0);
  return soma / numbers.length;
};
console.log("M\xE9dia Aritm\xE9tica Simples: ".concat(mediaAritimetica(3, 6, 10, 9)));
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, numeros = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numeros[_key2] = arguments[_key2];
  }
  var soma = numeros.reduce(function (accum, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accum + number * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  var weightSum = numeros.reduce(function (accum, numero) {
    var _numero$weight;
    return accum + ((_numero$weight = numero.weight) !== null && _numero$weight !== void 0 ? _numero$weight : 1);
  }, 0);
  return soma / weightSum;
};
console.log("M\xE9dia Ponderada: ".concat(mediaPonderada({
  number: 9,
  weight: 3
}, {
  number: 7
}, {
  number: 10,
  weight: 2
})));
var mediana = function mediana() {
  for (var _len3 = arguments.length, numeros = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numeros[_key3] = arguments[_key3];
  }
  var ordenar = [].concat(numeros).sort(function (a, b) {
    return a - b;
  });
  var meio = Math.floor(ordenar.length / 2);
  if (ordenar.length % 2 !== 0) {
    return ordenar[meio];
  } else {
    var primeiro = ordenar[meio - 1];
    var segundo = ordenar[meio];
    return mediaAritimetica(primeiro, segundo);
  }
};
console.log("Mediana: ".concat(mediana(2, 5, 99, 4, 42, 7)));
console.log("Mediana: ".concat(mediana(15, 14, 8, 7, 3)));
var moda = function moda() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var quantidade = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantidade.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantidade[0][0];
};
console.log("Moda: ".concat(moda(1, 1, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));