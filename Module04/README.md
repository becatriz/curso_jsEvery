# Resumo de SOLID 

O acrónimo de SOLID por si só traz algo interessante para se pensar. Se entendermos como uma palavra em português poderiamos remeter a algo "sólido". O que faz todo sentido, SOLID nos traz conhecimentos sólidos para podemos trabalhar no dia a dia. Mas claro, esse não é o significado. O correto é:<br/><br/>

**S**: Single Responsiblity Principle (Princípio da responsabilidade única)<br/>
**O**: Open-Closed Principle (Princípio Aberto-Fechado)<br/>
**L**: Liskov Substitution Principle (Princípio da substituição de Liskov)<br/>
**I**: Interface Segregation Principle (Princípio da Segregação da Interface)<br/>
**D**: Dependency Inversion Principle (Princípio da inversão da dependência)<br/><br/>

Com esses conceitos podemos deixar nossa arquitetura e código muito mais limpos, e eficientes.

# Exemplos de SOLID

### Single Responsiblity Principle (Princípio da responsabilidade única)
A classe a seguir só tem uma responsabilidade: Calcular a area total de uma forma geometrica


CLASSES
```js
class GeometricCalculation {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

   get area() {
        return this.calculationArea()
    }

   calculationArea() {
        return this.height * this.width;
    }
}
```

FUNÇÕES

```js

function calculationArea(height, width) {
        return height * width;
    }

```

REACT (App.js)
```js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

```

### Open-Closed Principle (Princípio Aberto-Fechado)
Esse principio se resume em poder adicionar novas funcionalidades a uma classe sem precisar mexer na classe mae. No exemplo a seguir temos uma classe que faz calculos para um Quadrado, estendendo a classe mae que calcula a area, mas na classe filha temos uma
adicao de funcionalidade que calcula a linha diagonal do quadrado.

```js
class Square extends GeometricCalculation {
    constructor(height, width) {
        super(height, width);
    }


    calculationArea(){
       //TODO 
    }


    get diagonalLine(){
        //TODO
    }
}

```


FUNÇÕES

```js
function isTopFruits(fruit){
    const TOP_FRUITS = ["tangerine", "apple", "strawberry"]

    return TOP_FRUITS.some(item => item == fruit)

}

```

REACT(Button.js)

```js

export const Button = ({ variant="primary", size="small", label, type }) => (
    <button 
      type={type}  
      className={`${size} ${variant}`}>
      {label}
    </button>
);

```



### Liskov Substitution Principle (Princípio da substituição de Liskov)

Esse principio fica mais simples de entender sabendo que não podemos "ferir" o principio de que se algo so faz uma coisa,não pode ser responsavel por fazer outras coisas. Por exemplo, se quisermos calcular a area de um circulo, não podemos fazer um "extends" da classe GeometricCalculation, pois o calculo é totalmente diferente. Portando para calcular a area do circulo precisamos criar uma classe para ela (por isso esse principio fica muito proximo do que vem a seguir)

```js
class Circle {
    constructor(radius){
        this.radius = radius
    }

    get calculationArea(){
        return Math.PI *  this.radius * this.radius
    }
}

```

FUNÇÕES

```js
function calculationAreaCircle(radius){
        return Math.PI *  radius * radius
    }

```

REACT(Button.js)

```js

export const Button = ({ variant="primary", size="small", label, type }) => (
    <button 
      type={type}  
      className={`${size} ${variant}`}>
      {label}
    </button>
);

```



### Interface Segregation Principle (Princípio da Segregação da Interface)

Assim como no exemplo anterior, esse principio se resume a: Muitas interfaces específicas do cliente são melhores do que uma interface de propósito geral.

Portanto, é melhor criar classes especificas que fazer uma unica coisa do que uma geral que da conta de tudo.


```js
class Sum {
    constructor(number1, number2){
        this.number1 = number1
        this.number2 = number2
    }

    get sumNumbers(){
        return this.number1 + this.number2
    }
}

```

FUNÇÕES

```js
function formatCurency(){
    return  new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
}

```

REACT (Currency.js)

```js

export const Currency = ({ number }) => (
    <div  
      className="currency">
      {number}
    </div>
);

```


### Dependency Inversion Principle (Princípio da inversão da dependência)
Esse principio basicamente nos diz que modulos que são mais complexos não podem depender de modulos que estão mais a baixo deles(Pai/filhos). Como diz no livro: Você deve depender de abstrações, não de concertações.

No exemplo abaixo a função que concatena o resultado poderia ser separado em uma função util. Essa classe nao precisa depender desa funcao que nao tem nada a ver com a soma em si.

```js
class Sum {
    constructor(number1, number2){
        this.number1 = number1
        this.number2 = number2
    }

    get sumNumbers(){
        return this.number1 + this.number2
    }

    //Extrair para uma função util
    concatResult(){
        return `O resultado da soma dos numeros é: ${this.number1 + this.number2}`
    }
}

```

FUNÇÕES

```js
function concatResult(result){
        return `O resultado da soma dos numeros é: ${result}`
    }
```

REACT (Form.js)

```js
const ConnectedLoginForm = () => {
    const handleSubmit = async (email, password) => {
        await api.login(email, password)
    }

    return (
        <LoginForm onSubmit={handleSubmit}>
    )
}

```




