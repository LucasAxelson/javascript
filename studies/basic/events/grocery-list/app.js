const addItem = (product, qty) => {
    const item = document.createElement('li');
    const bold = document.createElement('b');
    bold.append(product);
    item.append(bold);
    item.append(` - ${qty}`);
    ul.append(item);
};

const form = document.querySelector('form');
const ul = document.querySelector('#list');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;

    addItem(product.value, qty.value);
    productInput.value = '';
    qtyInput.value = '';
});

// Add Item function without use of Append method
// const addItem = (product, qty) => {
//     const item = document.createElement('li');
//     item.insertAdjacentText('afterbegin', product);
//     item.insertAdjacentText('beforeend', qty);
//     ul.insertAdjacentElement('afterbegin', item);
// };

// const input = document.querySelector('#username');
// let h1 = document.querySelector('h1');

// input.addEventListener('input', function () {
//     hValue = username.value;
//     h1.innerHTML = `Welcome, ` + hValue;
//     if (hValue.length === 0) {
//         h1.innerText = 'Enter Your Username';
//     }
// });


// const hello = document.querySelector('#hello');
// const goodbye = document.querySelector('#goodbye');

// hello.addEventListener('click', function () {
//     console.log('hello');
// });

// goodbye.addEventListener('click', function () {
//     console.log('goodbye');
// });