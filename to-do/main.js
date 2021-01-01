
let action = prompt("What would you like to do?");

while (!action) {
    if (action === 'q') break;
    prompt("Please enter a valid option.")
}

if (action === 'q') {
    alert("Ok. You quit.")
}
else {
    alert("Works");
}



