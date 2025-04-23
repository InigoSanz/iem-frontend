function add(a, b) {
  return a + b;
}

const sum = add("Hola", "mundo");

console.log(sum);
// Esto no nos vale

function add2(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    if (typeof a !== "number") {
      console.log("a is not a number");
    }

    if (typeof b !== "number") {
      console.log("b is not a number");
    }

    return null;
  }

  return a + b;
}

const sum2 = add2("hola", "mundo");

console.log(sum2);
// Esto si nos vale

const arrowAdd = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    if (typeof a !== "number") {
      console.log("a is not a number");
    }

    if (typeof b !== "number") {
      console.log("b is not a number");
    }

    return null;
  }

  return a + b;
}; // Una arrow function, se utilizan como "ciudadanos de primera", ... Se invoca la función y se utiliza como una variable.

const arrowAddSum = arrowSum(a, b);

console.log(arrowAddSum); // Así

// ¿Ejemplo memoria funciones?
function container() {
  let z = 5;

  return function increment() {
    z++;
    console.log(z);
  };
}
const increment = container();
increment(); // = 6, investigar lo de la memoria de las funciones, mirar los apuntes de clase

let array = [1, 2, 3, 4, 5]; // Los arrays son dinámicos, como los arraylist de Java, la diferencia es que aqui un array puede contener diferentes tipos de datos
array.push(6); // Añade en ultima posicion
array.pop(); // Elimina el ultimo
array.shift(); // Elimina el primero
array.unshift(); // Añade 0 al principio

const person = {
  name: "Iñigo",
  age: 27,
  isActive: true,
}; // Objecto clave-valor

// En los objetos se pueden leer, modificar y eliminar
console.log(person.name);
person.name = "Juan";
delete person.isActive;

for (let item of array) {
  console.log(item);
}

for (let key in person) {
  console.log(key);
  console.log(person[key]);
}

// No se puede seguir el ritmo de copilot haha

let people = [
  { name: "Pepe", age: 30, isActive: true },
  { name: "Juan", age: 31, isActive: false },
];

// map
const names = people.map(function getName(person, i) {
  return person.name;
});
console.log(names);

// Hay más funciones, como .filter, que si no cumple la condicion que le indicamos no devuelve el elemento en cuestión
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((n, i) => {
  return n % 2 === 0;
});

// Funcion .reduce
const reduceSum = numbers.reduce((acc, n, i) => {
  return acc + n;
}, 0);
