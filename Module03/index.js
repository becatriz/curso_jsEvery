//Implementação do MAP
function myMap(array, fn) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const result = fn(array[i]);
    newArray.push(result);
  }

  return newArray;
}

// Se tentarmos fazer um "filtro" ele sempre retorna undefined nos valores que nao passam no filtro
const result = myMap(["açucar", "mel", "macarrão"], (value) => {
  if (value === "mel") {
    return value;
  }
});

console.log(result) // [ undefined, 'mel', undefined ]

const result2 = myMap(["açucar", "mel", "macarrão"], (value) => value);

console.log(result2) // [ 'açucar', 'mel', 'macarrão' ]
