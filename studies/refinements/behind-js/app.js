// Call Stack - JS

const name = `Lucas`; // Executes 1st - Global

const first = () => {
  // Executes 2nd - Function -> Execution context
  let a = 2;
  let b = 3;
  return a + b;
};

function second(x, y) {
  // Executes 3rd - function reliant upon another function
  let c = first();
}
