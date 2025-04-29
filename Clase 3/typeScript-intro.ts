console.log("Hello world of typescript");

let age: number = 27;
let nickName: string = "Guan";
let isStudent: boolean = true;
let car: null = null;
let array: number[] = [1, 2, 3, 4, 5];
let notKnownArray: unknown = ["unknown"];

// Manera de comprobar que es un array, por ejemplo ->
const isArray = (notKnownArray as any).length !== undefined;

if (isArray) {
  const knownArray: any[] = notKnownArray as any[];
  const firstElement = knownArray[0];

  const isString = typeof firstElement === "string";
  const isNumber = typeof firstElement === "number";

  if (isString) {
    const stringArray: string[] = knownArray as string[];
  } else if (isNumber) {
    const numberArray: number[] = knownArray as number[];
  } else {
    console.log("No sabemos el tipo");
  }
}

// Funciones
function add(a: number, b: number): number {
  return a + b;
}
// add("hello", "world"); type no nos deja, antes en JS se lo había tragado

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

// Clases
class Person {
  private _name: string; // Buenas prácticas serian los privados definirlos con una "_", convención de nombres
  private _age: number;
  private _isStudent: boolean;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

class Animal {
  private _name: string;
  private _age: number;
}

class Dog extends Animal {
  // Funciona igual que Java
}

// Interfaces
// La diferencia radica en que las interfaces te obligan a implementar en la clase los atributos, métodos o funciones de esta
// Diferencia entre extends e implements, es que extends hereda estructura e implementacion, implements unicamente la implementacion y tenemos que poner nosotros la estructura
