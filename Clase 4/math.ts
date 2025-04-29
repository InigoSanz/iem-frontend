function add(a: number, b: number): number {
  return a + b;
}

function multi(a: number, b: number): number {
  return a * b;
}

const mathOperations = {
  add,
  multi,
};

export { add, multi };
export default mathOperations;
