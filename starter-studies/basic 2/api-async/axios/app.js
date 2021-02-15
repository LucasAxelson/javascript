const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json', } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke
    } catch (e) {
        return "No Joke found. Try again."
    }
}

const jokes = document.getElementById('jokes')
const addDadJoke = async () => {
    const joke = await getDadJoke()
    const newLi = document.createElement('li')
    newLi.append(joke)
    jokes.append(newLi)
}

const button = document.querySelector('button')
button.addEventListener('click', addDadJoke)

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(e => {/
//         console.log('Error', e)
//     })

// const fetchBitPrice = async () => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//         console.log(res.data.ticker.price)
//     } catch (e) {
//         console.log('Error caught', e)
//     }
// }