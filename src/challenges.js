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

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distenceCat1 = Math.abs(mouse - cat1);
  let distenceCat2 = Math.abs(mouse - cat2);
  if (distenceCat1 === distenceCat2) {
    return 'os gatos trombam e o rato foge';
  } if (distenceCat1 < distenceCat2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(arrayNumbers) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    let fizz = arrayNumbers[index] % 3;
    let buzz = arrayNumbers[index] % 5;
    if (fizz === 0 && buzz === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (fizz === 0 && buzz !== 0) {
      arrayFizzBuzz.push('fizz');
    } else if (buzz === 0 && fizz !== 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
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
