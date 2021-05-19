const anchor = $(`p.test-anchor`)
anchor.on("click", () => {
    anchor.css("color", "red")
})

// Manipulating styles
$("h1").css("color","red")
$("h2.sd-title").css("color","blue")
$("h2.sd-title").css("font-size","28px")
$("h6").css("margin","15px")
$("button.click-me").css("display", "block")

// Seperating behaviours from styles
$("h3").addClass("example-class")
$("h4").removeClass("ft-title")
$("button.click-me").addClass("margin-25 jq-btns")

// Must use comma on class selection, mustn`t use comma on declaration
$("h1, h3").addClass("margin-25 padding-15")
$("h5").addClass("padding-15 formatting")
$("img").addClass("dogs-img margin-25")

// Manipulating HTML & Attr
$("h2").html("<em>Changed the text. Soz</em>")
$("img").attr("src", "dogs.jpg")

// Adding event listeners
$("button.click-me").click(function() {
    $("h4").addClass("clicked-me")
})

$("button.click-me").mouseout(function() {
    $("h4").removeClass("clicked-me")   
})

// Code-reduction
// JavaScript (vanilla)
// for (let i = 0; i < document.querySelectorAll(`button.click-me`).length; i++) {
//     document.querySelectorAll(`button.click-me`)[i].addEventListener(`click`, () => {
//         document.querySelector(`h1`).style.color = `pink`
//     })    
// }
// JavaScript (JQuery)
$("button.click-me").click(() => {
    $("h1").css("color", "orange")
})

// Keyboard event handlers - Same function, different way of writing
// $("input").keypress((event) => {
//     $("h5").text(event.key)
// })
$("input").on("keypress", (event) => {
    $("h5").text(event.key)
})

// Adding & Removing elements
$("h6").before("<button>Hello</button>")
$("h6").after("<button>Hello</button>")

$("h6").prepend("<button>Hello</button>")
$("h6").append("<button>Hello</button>")

// $("h6").remove()

// jQuery animations
// $("button").on("click", () => {
//     $("h1, h2, h3, h4, h5, h6").slideToggle()
//     // $("h1, h2, h3, h4, h5, h6").fadeToggle()
//     // $("h1").animate({opacity: 0.5}) //Must be numeric values
// })

$("button").on("click", () => {
    $("h1, h2, h3, h4, h5, h6").slideUp().slideDown().animate({opacity: 1})
})
