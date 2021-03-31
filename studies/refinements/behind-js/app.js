// Scope & This keyword

// Global scope variable, lists under class Window.
// var firstName = 'Matilda';

// Object - if This is declared within the object,
// `this.firstName` - this will
// const jonas = {
//   firstName: "Jonas",
//   year: 1991,
//   // Inherit`s jonas as `this` keyword, since it is a method
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);
    // Translation: 2037 - jonas.year

    // Solution 1
    // Saves this keyword from parent scope
    // const self = this; // self or that
    // // Normal funcs possess their own `this` keyword. Whatever is put in the brackets aside function declaration
    // const isMillenial = function () {
    // Utilizes parent scope`s saved `this` to use within the function
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    // => func inherit parent`s scope as `this` keyword,
    // since they don`t have their own.
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   // Arrow functions don`t have a `this` keyword, they inherit them.
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//     // Output: `Hey Matilda` - `This` = Window
//   },
// };
// jonas.greet();
// jonas.calcAge();

// arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

// // Call Stack - JS

// const name = `Lucas`; // Executes 1st - Global

// const first = () => {
//   // Executes 2nd - Function -> Execution context
//   let a = 2;
//   let b = 3;
//   return a + b;
// };

// function second(x, y) {
//   // Executes 3rd - function reliant upon another function
//   let c = first();
// }
