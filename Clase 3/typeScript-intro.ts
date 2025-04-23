console.log("Hello world of typescript");

let age: number = 27;
let nickName: string = "Guan";
let isStudent: boolean = true;
let car: null = null;
let array: number[] = [1, 2, 3, 4, 5];
let notKnownArray: unknown = ["unknown"];

const isArray = (notKnownArray as any).length; // Manera de comprobar que es un array, por ejemplo
