const resetBtn = document.getElementById('resetBtn')
resetBtn.addEventListener('click', () => {
    box.forEach(function (img) {
        box.removeChild(img)
    })
})

const form = document.getElementById('searchForm')
const searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener('click', async function (e) {
    e.preventDefault()
    const searchTerm = form.elements.query.value
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    form.elements.query.value = ''
})

const box = document.getElementById('box')

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            const sub = document.createElement('p')
            const showBox = document.createElement('div')
            img.src = result.show.image.medium;
            sub.innerText = result.show.genres
            showBox.append(img)
            showBox.append(sub)
            box.append(showBox)
        }
    }
}

// const test = document.getElementById('test')
// test.addEventListener('click', () => {
//     const searchTerm = form.elements.query.value
//     const config = { params: { q: searchTerm } }
//     const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
//     console.log(res.data.show)

// })

