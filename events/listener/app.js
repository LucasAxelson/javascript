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

const addItem = (product, qty) => {
    const item = document.createElement('li');
    item.insertAdjacentText('afterbegin', product);
    item.insertAdjacentText('beforeend', qty);
    ul.insertAdjacentElement('afterbegin', item);
};




// const hello = document.querySelector('#hello');
// const goodbye = document.querySelector('#goodbye');

// hello.addEventListener('click', function () {
//     console.log('hello');
// });

// goodbye.addEventListener('click', function () {
//     console.log('goodbye');
// });