// AWAIT FUNCTIONS ================================

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })
}

async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('purple', 1000)
    return console.log('Test completed')
}

async function printRainbow() {
    await rainbow()
    console.log('End of rainbow')
}

// ASYNC FUNCTIONS ================================

// const login = async (username, password) => {
//     if (!username || !password) throw 'Missing credentials'
//     if (password === 'corgi') return 'Corgi is your password'
//     throw 'Failed request'
// }

// login('sdfijds', 'corgi')
//     .then(msg => {
//         console.log('Logged in!')
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log('Error!')
//         console.log(err)
//     })