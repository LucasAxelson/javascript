const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

const container = document.getElementById('container');

for (let i = 0; i < 20; i++) {
    const node = document.createElement('button');
    const box = document.createElement('div');
    node.innerHTML = '<b>Hey!</b>';
    container.appendChild(box);
    box.appendChild(node);
}

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function () {
        button.style.backgroundColor = randomColor();
    })
}
