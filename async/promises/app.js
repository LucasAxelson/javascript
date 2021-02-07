const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random()
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('Your fake data:')
            } reject('Request Error')
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log('Request Successful')
        console.log(data)
    })
    .catch((err) => {
        console.log('Failure.', err)
    })
