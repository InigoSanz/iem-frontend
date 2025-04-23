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
