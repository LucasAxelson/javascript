const input = document.querySelector('#username');
let h1 = document.querySelector('h1');

input.addEventListener('input', function () {
    hValue = username.value;
    h1.innerHTML = `Welcome, ` + hValue;
    if (hValue.length === 0) {
        h1.innerText = 'Enter Your Username';
    }
});


// const hello = document.querySelector('#hello');
// const goodbye = document.querySelector('#goodbye');

// hello.addEventListener('click', function () {
//     console.log('hello');
// });

// goodbye.addEventListener('click', function () {
//     console.log('goodbye');
// });