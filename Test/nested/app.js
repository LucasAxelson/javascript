const names = [
    ['I', 'You'],
    ['He', 'She', 'It'],
    ['They', 'We']
]

for (let i = 0; i < names.length; i++) {
    const joe = names[i];
    console.log(names[i])
}

const secret = 5;

let guess = prompt("What is the lucky number?");
while (guess !== secret) {
    guess = prompt("Try again. What is the lucky number?");
}
alert("Congratulations. The lucky number is 5!");