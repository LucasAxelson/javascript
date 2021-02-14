const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

function colorize() {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}

const container = document.getElementById('container');

for (let i = 0; i < 20; i++) {
    const box = document.createElement('div');
    const node = document.createElement('button');
    const phrase = document.createElement('span');
    node.innerHTML = '<b>Hey!</b>';
    phrase.innerHTML = 'Welcome to a Colourful Life!';
    box.appendChild(node);
    box.appendChild(phrase);
    container.appendChild(box);
};

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', colorize)
};

const spans = document.querySelectorAll('span');

for (let span of spans) {
    span.addEventListener('click', colorize)
};

// const buttons = document.querySelectorAll('button');

// for (let button of buttons) {
//     button.addEventListener('click', function () {
//         button.style.backgroundColor = randomColor();
//     })
// }

