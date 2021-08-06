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
function fizzBuzzIndex(index) {
  if (index % 3 === 0 && index % 5 === 0) {
    return 'fizzBuzz';
  } if (index % 3 === 0) {
    return 'fizz';
  } if (index % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(arrayNumbers) {
  let arrayFizzBuzz = [];
  arrayNumbers.forEach(function (index) {
    arrayFizzBuzz.push(fizzBuzzIndex(index));
  });
  // my old solution;
  // for (let index = 0; index < arrayNumbers.length; index += 1) {
  //   if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
  //     arrayFizzBuzz.push('fizzBuzz');
  //   } else if (arrayNumbers[index] % 3 === 0) {
  //     arrayFizzBuzz.push('fizz');
  //   } else if (arrayNumbers[index] % 5 === 0) {
  //     arrayFizzBuzz.push('buzz');
  //   } else {
  //     arrayFizzBuzz.push('bug!');
  //   }
  // }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(stringphrase) {
  // Here I declarete the variables which I will change in the string, I have to use /gi g = global i = ignore hight of letters.
  let la = /a/gi;
  let le = /e/gi;
  let li = /i/gi;
  let lo = /o/gi;
  let lu = /u/gi;
  // I used the function replace().
  let newEncode = stringphrase.replace(la, '1').replace(le, '2').replace(li, '3').replace(lo, '4');
  newEncode = newEncode.replace(lu, '5');
  return newEncode;
}

function decode(stringdecode) {
  let l1 = /1/gi;
  let l2 = /2/gi;
  let l3 = /3/gi;
  let l4 = /4/gi;
  let l5 = /5/gi;
  let newDecode = stringdecode.replace(l1, 'a').replace(l2, 'e').replace(l3, 'i').replace(l4, 'o');
  newDecode = newDecode.replace(l5, 'u');
  return newDecode;
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

