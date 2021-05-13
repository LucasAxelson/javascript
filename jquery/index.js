// Manipulating styles
$("h1").css("color","red")
$("h2.sd-title").css("color","blue")
$("h2.sd-title").css("font-size","28px")
$("h2.sd-title").css("text-align","center")
// Seperating behaviours from styles
$("h3").addClass("example-class")
$("h4").removeClass("ft-title")
// Must use comma on class selection, mustn`t use comma on declaration
$("h1, h3").addClass("margin-25 padding-15")
$("h5").addClass("margin-25s formatting")
$("img").addClass("dogs-img margin-25")
// Manipulating HTML & Attr
$("h2").html("<em>Changed the text. Soz</em>")
$("img").attr("src", "dogs.jpg")
// Adding event listeners
$("button").click(function() {
    $("h4").addClass("clicked-me")
})

$("button").hover(function() {
    $("h4").removeClass("clicked-me")
})
// Code-reduction

// JavaScript (vanilla)
// for (let i = 0; i < document.querySelectorAll(`button`).length; i++) {
//     document.querySelectorAll(`button`)[i].addEventListener(`click`, () => {
//         document.querySelector(`h1`).style.color = `pink`
//     })    
// }

// JavaScript (JQuery)
$("button").click(() => {
    $("h1").css("color", "orange")
})

// Keyboard event handlers

