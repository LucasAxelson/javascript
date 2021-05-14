// VARIABLES
const form = document.querySelector(`form`)
const inputTweet = document.querySelector(`.input--tweet`)
const btnTweet = document.querySelector(`.button--tweet`)
const containerTweets = document.querySelector(`.container--tweets`)

// FUNCTIONS
function addTweet (input) {
    const paragraph = document.createElement(`p`)
    paragraph.innerText = input.value
    containerTweets.append(paragraph)
}

function renderAlert(charCount) {
    const alert = document.createElement(`p`)
    alert.classList.add(`container__alert`)
    const containerAlert = document.createElement(`div`)
    containerAlert.classList.add(`container--alert`)

    alert.innerText = `You have used too many characters (${charCount}). The limit is 280 characters.`
    containerAlert.append(alert)

    form.insertAdjacentElement(`beforebegin`, containerAlert)
}

function removeAlert() {
    if (document.querySelector(`.container--alert`)) {
    const containerAlert = document.querySelector(`.container--alert`)
    containerAlert.remove()
    }
}

function correctAlert(charCount) {
    const alert = document.querySelector(`.container__alert`)
    alert.innerText = `You have used too many characters (${charCount}). The limit is 280 characters.` 
}


// APP
form.addEventListener(`submit`, (e) => {
    e.preventDefault()
    const charCount = inputTweet.value.length

    if (charCount <= 10) {
        addTweet(inputTweet)
    }

    if (charCount > 10 && !document.querySelector(`.container--alert`)) {
        renderAlert(charCount)
    } else if (charCount > 10 && document.querySelector(`.container--alert`)) {
        correctAlert(charCount)
    } else {
        removeAlert()
    }
})

