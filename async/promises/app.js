const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('blue', 2000))
    .then(() => delayedColorChange('green', 3000))
    .then(() => delayedColorChange('purple', 2000))
    .then(() => delayedColorChange('violet', 1000))
    .then(() => delayedColorChange('yellow', 2000))
    .then(() => delayedColorChange('orange', 3000))

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random()
//         setTimeout(() => {
//             if (rand < 0.7) {
//                 resolve('Your fake data:')
//             } reject('Request Error')
//         }, 1000)
//     })
// }

// fakeRequest('/dogs/1')
//     .then((data) => {
//         console.log('Request Successful')
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log('Failure.', err)
//     })
