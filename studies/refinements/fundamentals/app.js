// Continue & Breaks
const mixArray = [`john`, `jay`, true, 13, 14, `liam`];
const strArray = [];

for (let i = 0; i < mixArray.length; i++) {
  if (typeof mixArray[i] !== `string`) continue;
  strArray[i] = mixArray[i];
}
console.log(strArray);

// Break with numbers
for (let i = 0; i < mixArray.length; i++) {
  if (typeof mixArray[i] === `number`) break;
  console.log(mixArray[i], typeof mixArray[i]);
  //   Log no other elements once a number is found
}

// Creation of an array from within an array
const testArray = [`john`, 1, true, [`a`, `b`, `c`]];
const typeOf = []; // First declare outside of primary array

for (let i = 0; i < testArray.length; i++) {
  //   typeOf[i] = typeof testArray[i];
  typeOf.push(typeof testArray[i]);
}

console.log(typeOf);

// Second example

const years = [1991, 2007, 1969, 2018];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages[i] = 2021 - years[i];
  // ages.push()
}

console.log(ages);

// ====================== *** ==================
// Ternary Operator -> (Expression) ? (Statement) : (Sec. Statement)
// If exp. is true, execute first stat. If not, execute sec. stat.

// let gender = 'male'
// gender = 'male' ? console.log('Male') : console.log('Woman')

// const randomNum = () => Math.floor(Math.random() * 10) + 1
// randomNum() > 5 ? console.log(`Number above 5.`) : console.log(`Number below 5.`)

// if (randomNum > 3) randomNum()
// else console.log('3 or Below')

// ====================== *** ==================
// Expressions = Actions -> Execution of a statement
// 23 + 25 = 48 -> Expression
// let variable = 23 + 25 = 48 -> Statement

// ====================== *** ==================
// SWITCH Statements

// let day = 'monday'

// switch (day) {
//     case 'monday':
//         console.log(`Monday`)
//         break
//     case 'tuesday':
//         console.log(`Tuesday`)
//         break
//     case 'wednesday':
//         console.log(`Wednesday`)
//         break
//     case 'thursday':
//         console.log(`Thursday`)
//         break
//     case 'friday':
//         console.log(`Friday`)
//         break
//     default:
//         console.log(`Must be the weekend`)
// }
