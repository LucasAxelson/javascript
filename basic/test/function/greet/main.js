function greetPerson() {
    console.log(`Hey there, ${firstName}`);
}

let firstName = prompt("What is your first name?");
while (firstName !== 'q' && firstName !== 'quit') {
    // if (!firstName) {
    //     const firstName = "John/Jane";
    //     console.log(greetPerson(firstName));
    // } else {
    console.log(greetPerson(firstName));
    // }
    firstName = prompt("What is your first name?");
}
console.log("Ok. You quit.");