/* eslint-disable sonarjs/no-one-iteration-loop */
// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(b, h) {
  return (b * h) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let arrayPhrase = phrase.split(' ');
  return arrayPhrase;
}

// Desafio 4
function concatName(arrayValue) {
  let x = arrayValue.length - 1;
  let stringValue = `${arrayValue[x]}, ${arrayValue[0]}`;
  return stringValue;
}
// Desafio 5
function footballPoints(wins, ties) {
  let winsSun = wins * 3;
  let points = winsSun + ties;
  return points;
}

// Desafio 6
function highestCount(numbRep) {
  let repetNumber = 0;
  const max = Math.max.apply(null, numbRep);
  for (let index = 0; index < numbRep.length; index += 1) {
    if (max === numbRep[index]) {
      repetNumber += 1;
    }
  }
  return repetNumber;
}

let test = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(test));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
