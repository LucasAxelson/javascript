const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const spans = document.querySelectorAll('h1 span');

for (let span of spans) {
    span = span.textContent;
    console.log(span);
}

for (let color of colors) {
    console.log(color);
}

// container.style.textAlign = 'center';

// const tImage = document.querySelector('img');

// tImage.style.width = '150px';
// tImage.style.borderRadius = '50%';
