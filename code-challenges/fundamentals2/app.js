// Coding Challenge 4

// Coding Challenge 3

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

// const bills = [125, 555, 44];
// const tips = [];
// const bonus = [];

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
//   bonus.push(result);
// }

// console.log(
//   `Bills: ${bills}
// Tips: ${tips}
// Bonuses: ${bonus}`
// );

// Coding Challenge 1
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
