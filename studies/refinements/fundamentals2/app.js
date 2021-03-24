// Backward loops ================

console.log(`Give me 20 dollars now!`);
for (let i = 20; i > 0; i--) {
  if (i === 1) console.log(`${i} dollar`);
  else console.log(`${i} dollars`);
}

console.log(`That\'d be twenty`); // Executes once all iterations of loop has been executed

// Continue & Breaks ================
// const mixArray = [`john`, `jay`, true, 13, 14, `liam`];
// const strArray = [];

// for (let i = 0; i < mixArray.length; i++) {
//   if (typeof mixArray[i] !== `string`) continue;
//   strArray[i] = mixArray[i];
// }
// console.log(strArray);

// Break with numbers ================
// for (let i = 0; i < mixArray.length; i++) {
//   if (typeof mixArray[i] === `number`) break;
//   console.log(mixArray[i], typeof mixArray[i]);
//   Log no other elements once a number is found
// }

// Creation of an array from within an array ================
// const testArray = [`john`, 1, true, [`a`, `b`, `c`]];
// const typeOf = []; // First declare outside of primary array

// for (let i = 0; i < testArray.length; i++) {
//   //   typeOf[i] = typeof testArray[i];
//   typeOf.push(typeof testArray[i]);
// }

// console.log(typeOf);

// Second example ================

// const years = [1991, 2007, 1969, 2018];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages[i] = 2021 - years[i];
// ages.push()
// }

// console.log(ages);

// While Loops ================
// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}. Try again!`);
//   if (dice === 6) console.log(`You rolled a ${dice}! Victory!`);
// }
