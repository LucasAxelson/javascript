const P1 = {
    score: 0,
    button: document.getElementById('p1Button'),
    display: document.getElementById('p1Display'),
}

const P2 = {
    score: 0,
    button: document.getElementById('p2Button'),
    display: document.getElementById('p2Display'),
}

const resetButton = document.getElementById('reset')
const winningScoreSelect = document.getElementById('playto')
let winningScore = 3
let isGameOver = false

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1
        if (player.score === winningScore) {
            isGameOver = true
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true
            opponent.button.disabled = true
        }
        player.display.textContent = player.score
    }
}

P1.button.addEventListener('click', () => {
    updateScores(P1, P2)
})

P2.button.addEventListener('click', () => {
    updateScores(P2, P1)
})

winningScoreSelect.addEventListener('change', () => {
    winningScore = parseInt(this.value)
    reset()
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false
    for (let P of [P1, P2]) {
        P.score = 0
        P.display.textContent = 0
        P.display.classList.remove('has-text-success', 'has-text-danger')
        P.button.disabled = false
    }
}
