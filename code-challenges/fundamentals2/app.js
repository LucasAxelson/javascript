// Coding Challenge 4
// Calculate tips with loops and calculate total`s average
let sum = 0;
calcAverage = (arr) => {
  for (let i = 0; i < bills.length; i++) {
    sum += arr[i];
  }
  return sum / bills.length;
};

calcTip = (bill) => {
  let tip;
  if (bill >= 50 && bill <= 300) {
    tip = 0.15 * bill;
  } else {
    tip = 0.2 * bill;
  }
  return tip;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = calcAverage(bills);

bills.forEach((bill) => {
  let tip = calcTip(bill);
  tips.push(tip);
});

// Coding Challenge 3
// Calculate the BMI of both people utilizing objects

// const Mark = {
//   fullName: `Mark Miller`,
//   height: 1.69,
//   mass: 78,

//   calcBMI() {
//     bmi = this.mass / this.height ** 2;
//     return bmi.toFixed(2);
//   },
// };

// const John = {
//   fullName: `John Smith`,
//   height: 1.95,
//   mass: 92,

//   calcBMI() {
//     let bmi = this.mass / this.height ** 2;
//     return bmi.toFixed(2);
//   },
// };

// if (John.calcBMI() > Mark.calcBMI()) {
//   console.log(
//     `${John.fullName}'s BMI (${John.calcBMI()}) is higher than ${
//       Mark.fullName
//     }'s (${Mark.calcBMI()})`
//   );
// } else {
//   console.log(
//     `${Mark.fullName}'s BMI (${Mark.calcBMI()}) is higher than ${
//       John.fullName
//     }'s (${John.calcBMI()})`
//   );
// }

// Coding Challenge 2
// Calculate the tips and total via arrays and loops

// const bills = [125, 555, 44];
// const tips = [];
// const total = [];

// calcTip = (bill) => {
//   let tip;
//   if (bill >= 50 && bill <= 300) {
//     tip = 0.15 * bill;
//   } else {
//     tip = 0.2 * bill;
//   }
//   return tip;
// };

// bills.forEach((bill) => {
//   let tip = calcTip(bill);
//   tips.push(tip);
// });

// for (let i = 0; i < bills.length; i++) {
//   let result = bills[i] + tips[i];
//   total.push(result);
// }

// console.log(
//   `Bills: ${bills}
// Tips: ${tips}
// Total: ${total}`
// );

// Coding Challenge 1
// Calculate the average score of the team to determine winner

// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// calcAverage = (a, b, c) => (a + b + c) / 3;

// const avgDolphins1 = calcAverage(44, 23, 71);
// const avgKoalas1 = calcAverage(65, 54, 49);

// const avgDolphins2 = calcAverage(85, 54, 41);
// const avgKoalas2 = calcAverage(23, 34, 27);

// function checkWinner(Dolphins, Koalas) {
//   if (Dolphins === Koalas) return `Tie`; // Guard Clause

//   return Koalas > Dolphins
//     ? `Koalas win! (Koalas: ${Koalas} vs Dolphins: ${Dolphins})`
//     : `Dolphins win! (Dolphins: ${Dolphins} vs Koalas: ${Koalas})`;
// }
