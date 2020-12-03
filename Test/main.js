function pressed() {
    document.getElementById("thankyou").innerHTML = "Thank you";

    //console.log(document.getElementById("thankyou"));
    //alert("Thank you for clicking")
}

function redirecionar() {
    window.open("https://siga.cps.sp.gov.br/aluno/login.aspx")
    window.location.href = "https://siga.cps.sp.gov.br/aluno/login.aspx";
}

function trocar(element) {
    element.innerHTML = "Thank you!"
}

function voltar(element) {
    element.innerHTML = "Pass the mouse here!"
}


function trocar1() {
    document.getElementById("seeyou").innerHTML = "Thank you for passing by!";
    //    alert("Works!")
}

function voltar1() {
    document.getElementById("seeyou").innerHTML = "Pass your mouse here!";
}

function load() {
    alert("Page loaded.");
}

function functchange(element) {
    console.log(element.value)
}

/*
function validaidade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true
    }
    else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");

console.log(validaidade(idade));

var d = new Date();
alert(d.get());
alert(d.getMonth());
alert(d.getFullYear());

var count;
for (count = 1; count <= 5; count++) {
    alert(count);
};

var count = 0;
while (count < 5) {
    console.log(count);
    count = count + 1;
    //    count++;
};

if (count = 5) {
    alert('Count has exceeded it\'s maxiumum');
}

var age = prompt('What is your age?')
if (age < 18) {
    alert('Under age')
}
else {
    alert('Welcome!')
}


var class1 = [{ name: "Lucas", age: 23, sex: "Male" }, { name: "Gabriela", age: 19, sex: "Female" }]

console.log(class1);
alert(class1[1].name);



var list = ["Lucas", "Chris", "Raphael"];
list.push("Gabriela")

alert(list.join(" / "));
alert(list);


var lucas = { name: "Lucas", idade: 23, sex: "Male" };

alert(lucas.name);
alert(lucas.sex);
*/