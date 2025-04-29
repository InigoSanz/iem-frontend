import { add } from "./modulo-uno";
import { multi } from "./modulo-dos";
import MathOperations from "./math";

const sum = add(5, 3);
const mult = multi(5, 3);

console.log(`Sum: ${sum}`); // Sum: 8

MathOperations.add(5, 5);
