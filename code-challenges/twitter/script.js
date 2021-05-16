// VARIABLES
const form = document.querySelector(`form`)
const inputTweet = document.querySelector(`.input--tweet`)
const btnTweet = document.querySelector(`.button--tweet`)
const containerTweets = document.querySelector(`.container--tweets`)

// FUNCTIONS
function addTweet (tweet) {
    const tweetDiv = document.createElement(`div`)
    tweetDiv.classList.add(`container--tweet`)
    const paragraph = document.createElement(`p`)
    paragraph.classList.add(`paragraph--tweet`)
    paragraph.innerText = modifyTweet(tweet)
    tweetDiv.append(paragraph)
    containerTweets.append(tweetDiv)
    inputTweet.value = ""    
}

function modifyTweet (rawTweet) {
    const newTweet = rawTweet[0].toUpperCase() + rawTweet.slice(1) 
    return newTweet
}

function renderAlert(charCount, charLimit) {
    const alert = document.createElement(`p`)
    alert.classList.add(`container__alert`)
    const containerAlert = document.createElement(`div`)
    containerAlert.classList.add(`container--alert`)

    alert.innerText = `You have used too many characters (${charCount}). The limit is ${charLimit} characters.`
    containerAlert.append(alert)

    form.insertAdjacentElement(`beforebegin`, containerAlert)
}

function removeAlert() {
    if (document.querySelector(`.container--alert`)) {
    const containerAlert = document.querySelector(`.container--alert`)
    containerAlert.remove()
    }
}

function correctAlert(charCount, charLimit) {
    const alert = document.querySelector(`.container__alert`)
    alert.innerText = `You have used too many characters (${charCount}). The limit is ${charLimit} characters.` 
}

// APP
form.addEventListener(`submit`, (e) => {

    e.preventDefault()
    const charCount = inputTweet.value.length
    const charLimit = 180 
    const rawTweet = inputTweet.value 
    
    if (charCount <= charLimit) {
        addTweet(rawTweet)
    }

    if (charCount > charLimit && !document.querySelector(`.container--alert`)) {
        renderAlert(charCount, charLimit)
    } else if (charCount > charLimit && document.querySelector(`.container--alert`)) {
        correctAlert(charCount, charLimit)
    } else {
        removeAlert()
    }
})
