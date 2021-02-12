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
    makeShows(res.data)
    form.elements.query.value = ''
})

const box = document.getElementById('box')

const makeShows = (shows) => {
    for (let result of shows) {
        if (result.show) {
            const showBox = document.createElement('div')
            const image = makeImages(result)
            const showSub = makeSubtitle(result)
            showBox.append(image)
            showBox.append(showSub)
            box.append(showBox)
        }
    }
}

const makeImages = (result) => {
    if (result.show.image) {
        const img = document.createElement('img')
        img.src = result.show.image.medium
        return img
    }
}

const makeSubtitle = (result) => {
    const subtitle = document.createElement('div')
    subtitle.setAttribute("id", "subtitle")
    if (result.show.genres || result.show.rating) {
        const name = document.createElement('p')
        name.setAttribute("id", "name")
        name.innerText = result.show.name
        subtitle.append(name)

        const rating = document.createElement('p')
        rating.setAttribute("id", "rating")
        rating.innerText = result.show.rating.average
        subtitle.append(rating)

        const showGenre = configureGenres(result)
        subtitle.append(showGenre)

        return subtitle
    }
}

const configureGenres = (result) => {
    const ul = document.createElement('ul')
    const genres = result.show.genres
    console.log(genres)
    for (let i = 0; i < genres.length; i++) {
        let span = document.createElement('span')
        span.innerText = genres[i]
        ul.append(span)
    }

    return ul
}


// const test = document.getElementById('test')
// test.addEventListener('click', () => {
//     const searchTerm = form.elements.query.value
//     const config = { params: { q: searchTerm } }
//     const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
//     console.log(res.data.show)

// })

