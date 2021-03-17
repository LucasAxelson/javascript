const container = document.getElementById('container');

for (let i = 0; i < 100; i++) {
    const node = document.createElement('button');
    node.innerHTML = '<b>Hey!</b>';
    container.appendChild(node);
}

// const node = document.createElement('button');
// node.innerHTML = '<b>Hey!</b>';
// container.appendChild(node);
