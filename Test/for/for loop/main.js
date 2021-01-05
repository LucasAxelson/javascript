
const people = ['Amit', 'Sumit', 'Kumit'];

// Loops each of the array's element through the string method - toUpperCase()
for (var i = 0; i < people.length; i++) {
    people[i] = people[i].toUpperCase();
    console.log(people[i])
}

//For... Of loop using In instead of Of

const testScores = {
    aaa: 12,
    bbb: 84,
    ccc: 35,
    ddd: 100
}

for (let subject in testScores) {
    console.log(`${subject} scored ${testScores[subject]}`)
}