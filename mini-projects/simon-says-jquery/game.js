const buttonColours = [`red`, `blue`, `green`, `yellow`]
let gamePattern = []
let userClickedPattern = []
let level = 0
const randomNumber = () => Math.floor(Math.random() * 4)
const randomChosenColour = () => buttonColours[randomNumber()]                    

function nextSequence() {
    const value = randomChosenColour()
    gamePattern.unshift(value)


    fadeInOut(value)
    playAudio(value)

    level++
    $("#level-title").html("Level "+level)
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[0] == gamePattern[0]) {
        setTimeout(() => {
            nextSequence()
        }, 1000)
    } else {
        gameOver()
        startOver()
    }
}

function gameOver() {
    $("body").toggleClass("game-over")
    setTimeout(() => {
        $("body").toggleClass("game-over")    
    }, 200)
    
    playAudio(`wrong`)
    $("#level-title").html("Game Over! Press Any Key to Restart")
}

function startOver() {
    level = 0
    gamePattern = []

    $(document).keypress((e) => {
            nextSequence()
            $(document).off("keypress")
        }
    )
}

function fadeInOut(randomChosenColour) {
    $("#"+randomChosenColour).css("opacity", "20%")
    setTimeout(() => {
        $("#"+randomChosenColour).css("opacity", "100%")
    }, 100)
}

function toggleAnimation(userChosenColour) {
    $("#"+userChosenColour).toggleClass("pressed")
    setTimeout(() => {
    $("#"+userChosenColour).toggleClass("pressed")    
    },150)    
}

function playAudio(soundClip) {
    let audio = new Audio('sounds/'+soundClip+'.mp3');
    audio.play();
}

$(".btn").click((button) => {
    const userChosenColour = button.target.id
    userClickedPattern.unshift(userChosenColour)

    fadeInOut(userChosenColour)
    toggleAnimation(userChosenColour)
    playAudio(userChosenColour)

    checkAnswer(userClickedPattern.length)
})

$(document).keypress((e) => {
    if(e.key == `a`) {
        nextSequence()
        $(document).off("keypress")
    }
})

startGame()