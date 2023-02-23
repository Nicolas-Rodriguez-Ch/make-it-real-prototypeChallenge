// Ejercicio 1
// Crea una función constructora llamada Persona que reciba 3 argumentos e inicialice un objeto con 3 propiedades: nombre, peso y altura.

// Agrega dos métodos a la función constructora Persona: saludar y bmi.

// saludar debe recibir un nombre y retornar el string "Hola , me llamo " donde es el argumento que se recibe y es la propiedad nombre del objeto.

// bmi no recibe ningún argumento y retorna el índice de masa corporal que se calcula con la siguiente fórmula:

// peso / altura^2
// Un ejemplo de cómo invocaríamos los métodos:

// const pedro = new Persona("Pedro", 72, 1.5);
// pedro.saludar("Maria"); // "Hola Maria, me llamo Pedro"
// pedro.bmi(); // 32

function Persona (name, heigth, weigth) {
    this.name = name;
    this.height = heigth;
    this.weigth = weigth;
}

Persona.prototype = {
    saludar(name){
        return `Hola ${name}, me llame ${this.name}`
    },
    bmi(){
        return this.height / this.weigth**2
    },
}

const pedro = new Persona("Pedro", 72, 1.5);
console.log(pedro.saludar("Maria")); // "Hola Maria, me llamo Pedro"
console.log(pedro.bmi()); // 32


// Ejercicio 2
// Crea una función constructora llamada Auto que no reciba ningún argumento pero inicializa una propiedad llamada velocidad en 0.

// Agrega dos métodos al prototipo de la función constructora:

// acelerar: recibe un número como argumento e incrementa la propiedad velocidad de acuerdo al número.
// frenar: recibe un número como argumento y decrementa la propiedad velocidad de acuerdo al número. Sin embargo, si la velocidad terminara siendo negativa debe quedar en 0.
// Un ejemplo de cómo utilizaríamos esta función constructora:

// const a1 = new Auto();
// a1.velocidad; // 0

// a1.acelerar(1);
// a1.acelerar(2);
// a1.velocidad; // 3

// a1.frenar(2);
// a1.velocidad; // 1

// a1.frenar(3);
// // la velocidad quedaría en -1, así que se deja en 0
// a1.velocidad; // 0

function Auto () {
    this.velocidad = velocidad = 0;
}

Auto.prototype = {
    acelerar (num){
        return this.velocidad += num;
    },
    frenar (num){
        this.velocidad -= num;
        return this.velocidad > 0 ?  this.velocidad : this.velocidad = 0;
    }
}

const a1 = new Auto();
a1.velocidad; // 0

a1.acelerar(1);
a1.acelerar(2);
console.log(a1.velocidad )// 3

a1.frenar(2);
console.log(a1.velocidad);

a1.frenar(3);// la velocidad quedaría en -1, así que se deja en 0
console.log(a1.velocidad);// 0

// Ejercicio 3
// Agregar un método palindrome a los strings de JavaScript que retorne true si el string es un palíndrome, o false de lo contrario.

// El método se va a utilizar de la siguiente forma:

// "anita lava la tina".palindrome() // true
// "prueba".palindrome() // false
// El ejercicio se resuelve en equipos, en un repositorio. La entrega la hacen todos los integrantes, la entrega es unicamente el link del repositorio
String.prototype.palindrome = function () {
    let newArr = [];
    for (let i = 0; i < this.split('').length; i++) {
        newArr.unshift(this[i]);
    }
    return this.replaceAll(' ', '') == newArr.join('').replaceAll(' ', '') ;
}

console.log("anita lava la tina".palindrome()) // true
console.log("prueba".palindrome()) // false
