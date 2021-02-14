function allEvens(arrayNum) {
    let evens = arrayNum.every(num => {
        return num % 2 === 0;
    });
    return evens;
};

const allOdd = ((arrayNum) => {
    return arrayNum.every(num => { return num % 2 !== 0 });
})


// const validUserNames = .filter(name => name.length < 10);

// const validUserNames = (array) => (array.filter(name => name.length < 10));

// const greet = (str) => {
//     return `Hey ${str}!`
// };

// const greet = (str) => { return console.log(`Hey ${str}!`) };

// const example = ["   timothee", "  darth-hater"]

// function cleanNames(strArray) {
//     let answer = strArray.map(function (str) {
//         return str.trim();
//     })
//     return answer
// }

