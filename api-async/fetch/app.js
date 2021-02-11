const fetchBitPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        const data = await res.json()
        console.log(data.ticker.price)
    } catch (e) {
        console.log('Error. Verify the cause of the issue')
    }
}

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("RESPONSE", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log('DATA PARSED')
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log('ERROR', e)
//     })