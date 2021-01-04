const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount = this.eggCount + 1;
        return "EGG";
    },
}

// const square = {
//     area(x) {
//         return Math.pow(x, 2);
//     },
//     perimeter(a) {
//         let sum = a
//         for (var i = 0; i < 4 - 1; i++) {
//             sum += a
//         }
//         return sum
//     }
// }

// const square = function (x) {
//     return Math.pow(x, 2);
// }

// let name = "Luke";

// function nameDefined() {
//     let name = "Lucas";
//     console.log(name);
// }

// nameDefined()

// const name1 = "Luke";

// // Functions variables work within a bubble. They exist outside of the external js variables.
// function name1Defined() {
//     const name1 = "Lucas";
//     console.log(name1);
// }

// name1Defined()
// console.log(name1)

