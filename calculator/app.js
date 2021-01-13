const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay() {
    // Selects calculator-screen class
    const display = document.querySelector('.calculator.screen');
    // Update element's value with 'displayValues' contents
    display.value = calculator.displayValue;
}

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // Access the clicked element
    const { target } = event;

    // Check if the clicked element is a button.
    // If not, exit from the function
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        console.log('operator', target.value);
        return;
    }

    if (target.classList.contains('decimal')) {
        console.log('decimal', target.value);
        return;
    }

    if (target.classList.contains('all-clear')) {
        console.log('clear', target.value);
        return;
    }

    if (target.classList.contains('equal-sign')) {
        console.log('equals', target.value);
        return;
    }

    console.log('digit', target.value);
});

function inputDigit(digit) {
    const { displayValue } = calculator;
    // Overwrite `displayValue` if the current value is '0' otherwise append to it
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}