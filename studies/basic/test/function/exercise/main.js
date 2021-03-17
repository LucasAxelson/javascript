let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function returnDay(index) {
    if (index < 1 || index > 7) {
        return null;
    }
    return week[index];
}

// function sumArray(array) {
//     let total = 0;
//     for (let sum in array) {
//         total += array[sum];
//     }
//     return total;
// }

// function capitalize(string1) {
//     return string1.charAt(0).toUpperCase() + string1.slice(1);
// }

// console.log(capitalize('John'));

// function lastElement(array) {
//     if (array === undefined || array.length == 0) {
//         return null;
//     }
//     const lastItem = array[array.length - 1];
//     return lastItem;
// }

// function rant(message) {
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
// }
