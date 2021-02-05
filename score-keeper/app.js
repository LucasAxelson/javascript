const p1Button = document.querySelector('#p1Button')
const p2Button = document.getElementById('p2Button')
const resetButton = document.getElementById('reset')

const p1Display = document.getElementById('p1Display')
const p2Display = document.getElementById('p2Display')
const scoreSelect = document.getElementById('playto')

let p1Score = 0
let p2Score = 0
let winningScore = 5
let isGameOver = false

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
    p1Score += 1
    if (p1Score === winningScore) {
    p1Display.textContent = p1Score
        } 
    }
})
p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score += 1
        if (p2Score === winningScore) {
        p2Display.textContent = p2Score
            } 
        }
})

scoreSelect.addEventListener('change', () => {
    winningScore
})

resetButton.addEventListener('click', () => {
    isGameOver = false
    p1Score = 0
    p2Score = 0
    p1Display.textContent = 0 
    p2Display.textContent = 0 
})
