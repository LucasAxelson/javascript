const buttonColours = [`red`, `blue`, `green`, `yellow`]
const gamePattern = []
const userClickedPattern = []
const randomNumber = () => Math.floor(Math.random() * 4)
const randomChosenColour = () => buttonColours[randomNumber()]                    

$(".btn").click((button) => {
    const userChosenColour = button.target.id
    userClickedPattern.push(userChosenColour)
    playAudio(userChosenColour)
    console.log(userClickedPattern)
})


function nextSequence() {
    gamePattern.push(randomChosenColour())

    fadeInOut(randomChosenColour())
    playAudio(randomChosenColour())

}

function fadeInOut(randomChosenColour) {
    $("#"+randomChosenColour).css("opacity", "20%")
    setTimeout(() => {
        $("#"+randomChosenColour).css("opacity", "100%")
    }, 100)
}

function playAudio(soundClip) {
    let audio = new Audio('sounds/'+soundClip+'.mp3');
    audio.play();
}