// Desafio 10
function techList(techProp, name) {
  if (techProp.length === 0) {
    return 'Vazio!';
  }
  // Organiza do objeto.
  techProp.sort();
  let arrayObject = [];
  // Foi usado o forEach para percorrer o array.
  techProp.forEach((content) => {
    let totalContent = { // Cria um objeto.
      tech: content,
      name,
    };
    arrayObject.push(totalContent);
  });
  return arrayObject;
}

// Desafio 11

function generatePhoneNumber(arrayNumbers) {
  let phoneNumber = '';
  if (arrayNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9 || repeatNumber(arrayNumbers) === true) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (index === 0) {
      phoneNumber = `(${arrayNumbers[index]}${arrayNumbers[index + 1]}) `;
    } if (index >= 2 && index <= 6) {
      phoneNumber += arrayNumbers[index];
    } if (index === 7) {
      phoneNumber += `-${arrayNumbers[index]}`;
    } if (index >= 8) {
      phoneNumber += arrayNumbers[index];
    }    
  }
  return phoneNumber;
}

function repeatNumber(arrayNumbers) {
  let countRepeat = {};
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (countRepeat[arrayNumbers[index]]) {
      countRepeat[arrayNumbers[index]] += 1;
    } else {
      countRepeat[arrayNumbers[index]] = 1;
    }
  }
  for (let indexCount in countRepeat) {
    if (countRepeat[indexCount] >= 3) {
      return true;
    }
  }
  return false;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
