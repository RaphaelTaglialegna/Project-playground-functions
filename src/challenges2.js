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
      name: name,
    };
    arrayObject.push(totalContent);
  });
  return arrayObject;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
