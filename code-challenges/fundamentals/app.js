// $15 tip, if purchase is between 50 & 300
// $20 tip, if purchase is different.
// Test Data: £275 -- $40 -- $430

// function tipBill(perc, bill) {
//     let tip = (perc / 100) * bill
//     console.log(`Your bill is £${bill}, and the tip will be £${tip}`)
// }

// let bill = 430
// If bill is between 50 & 300, 15%. If not, 20%.
// bill >= 50 && bill <= 300 ? tipBill(15, bill) : tipBill(20, bill)

// =================== **** =======================
// Data 1: Dolphins: 96, 108 and 89. Koalas: 88, 91 and 110
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// const dolphinsScore = [7, 112, 101]
// const koalasScore = [19, 95, 106]
// const reducer = (accumulator, currentValue) => accumulator + currentValue

// function calculateScore(array1, array2) {

// Sum all values within an array.
//     let score1 = array1.reduce(reducer)
//     score1 = score1 / 3
//     console.log(score1)

// Sum all values within an array.
//     let score2 = array2.reduce(reducer)
//     score2 = score2 / 3
//     console.log(score2)

//     return determineWinner(score1, score2)
// }

// function determineWinner(score1, score2) {
// If Victor's score is larger than the other and over 100, victory
//     if (score1 > score2 && score1 >= 100) return `Congratulations, Dolphins! You are the winners`;
//     else if (score2 > score1 && score2 >= 100) return `Congratulations, Koalas! You are the winners`;
// If both scores are equal and above 100, draw!
//     else if (score1 == score2 && score1 > 100) return `No winners today! It's a draw!!`;
// If non of the above criterias match, return this.
//     else return `Neither teams have surpassed the minimum score of 100. Both teams lose.`;
// }

// =================== **** =======================
// // Mass in Kilograms (KG) -- Height is Meters (M)
// // BMI = mass / height ** 2 = mass / (height * height)

// const Mark1 = {
//     height: 1.69,
//     weight: 78,
//     BMI() {
//         return BMIcalc(this.weight, this.height)
//     }
// }

// const John1 = {
//     height: 1.95,
//     weight: 92,
//     BMI() {
//         return BMIcalc(this.weight, this.height)
//     }
// }

// function BMIcalc(mass, height) {
//     let BMI = mass / height ** 2
//     return BMI.toFixed(2)
// }

// let markHigherBMI = John1.BMI() < Mark1.BMI()

// if (markHigherBMI == true) {
//     console.log(`Mark's BMI (${Mark1.BMI()}) is higher than John's (${John1.BMI()})!`)
// } else {
//     console.log(`Johns's BMI (${John1.BMI()}) is higher than Mark's (${Mark1.BMI()})!`)
// }
