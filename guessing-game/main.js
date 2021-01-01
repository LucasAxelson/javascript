let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt("Enter your first guess!");
let attempts = 1

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Number is too high. Try again!");
    }
    else {
        guess = prompt("Number is too low. Try again!");
    }
}
if (guess === 'q') {
    alert("Ok. You Quit!")
}
else {
    alert(`You got it! It took you ${attempts} guessses`)
}