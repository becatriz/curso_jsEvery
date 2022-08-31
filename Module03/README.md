# JavaScript Funcional

## Funções puras

Funções puras, são funções que ao receber determinados parametros(ou não) sempre irão
retornar o mesmo valor de entrada.

Ex:

```js
function example01() {
  return "My name is Rebeca";
}

function example02(name) {
  return `My name is ${name}`;
}

function example02(name, age) {
  return `My name is ${name}. I am ${age} years old`;
}
```

## Funções impuras

Funções impuras, são funções que ao receber determinados parametros(ou não) terão seus valores
alterados dentro da função.

Ex:

```js
let name = "Maria";

function example01() {
  return name + " " + "Age: 29";
}

function example02(newName) {
  name = newName;

  return name;
}

function example02(name, age) {
  const sumAge = 2;

  return `My name is ${name}. I am ${age + sumAge} years old`;
}
```

# Imutabilidade

## O que é?

Imutabilidade é o conceito de que variaveis não são "variaveis". Elas são imutaveis, não podendo ser reatribuidas com outros valores que foram definidos inicialmente.

Ex:

```js
const I_AM_IMMUTABLE = true;
```

# Recursividade

## O que é ?

Recursividade é quando uma função chama a si mesma. Sempre necessário ter uma condição de parada para ela se auto chamar, para que não fique em loop infinito.

Ex

```js
function sum(num) {
  console.log(num); // 5, 4, 3, 2, 1
  let result = num - 1;

  if (result > 0) {
    sum(result);
  }
}
sum(5);
```

# High order

## O que é?

High order functions são funções que recebem uma função ou mais como argumento, retornando outra função.

Ex:

```js
function myMap(array, fn) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const result = fn(array[i]);
    newArray.push(result);
  }

  return newArray;
}

myMap(["açucar", "mel", "macarrão"], (value) => value);

function myFilter(array, fn) {
  const filter = [];

  for (let i = 0; i < array.length; i++) {
    const result = fn(array[i], i, array);
    if(result){
        filter.push(result);
    }
  }

  return filter;
}

myFilter(["açucar", "mel", "macarrão"], (value) => value === "mel");
```
# Currying

## O que é?
Currying não recebe os parametros tudo de uma só vez. A função pega o primeiro paramtro, e retorna o resultado, pegando o segundo parametro e retornando e assim sucessivamente.

Ex:

```js
const validator = (params) => {
  return (param) => {
    if (params === "Rebeca") return "Bem vinda";

    if (!param) return "Informe sua idade";

    return "Boas vindas";
  };
};

console.log(validator("Rebeca")()); // Bem vinda

const smaller = from => to => Number(to) >= Number(from)

console.log(smaller(4)(2)) // false

// Getter do Vue
const getName: (state) => (getter) => { 
    if(!state.name) {
        return getter.age
    }
 }
```

## O que é callback hell?
Callback hell são varias funções aninhadas em que uma função espera pelo resultado da outra para poder continuar a execução e assim sucessivamente.

## Como evitar callback hell?
Codificando com melhores práticas, como o uso de `Promises`, `High order` , modularizar separand responsabilidades entre outras boas práticas.
