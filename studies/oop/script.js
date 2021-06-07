// Arrow functions don`t work due to a lack of a keyword
const Person = function(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
    this.age = calcAge(birthYear)
    }

    calcAge = function (birthYear) {
        let year = new Date().getFullYear()
        return year - birthYear
}

const lucas = new Person (`Lucas`, 2000)
console.log(lucas)
const matilda = new Person (`Matilda`, 2005)
// console.log(matilda)
const jay = new Person (`Jay`, 1987)
// console.log(jay)

// Prototype of all objects created from Person. 
// Since `eat` function will not be encountered within the constructor function, this will result in the function being pulled from the prototype established for the Person object.
Person.prototype.eat = function () {
    console.log(`${this.firstName} is eating.`)
}
// `Species` attr not found in constructor, so will be found in prototype. 
Person.prototype.species = `Homo Sapiens`

// Lucas is an object created with Person template, thus inherits it`s set prototype methods.
// console.log(Person.prototype.isPrototypeOf(lucas))
// Person is an object created via the base JS Object template, thus it inherits the prototype methods for Objects.
// console.log(Person.prototype.isPrototypeOf(Person))

// console.log(lucas.hasOwnProperty(`birthYear`))
    // Species pertains to the prototype and not the actual object iteration. Therefore it is only sought out and used when the requested item can`t be found in the constructor function. 
// console.log(lucas.hasOwnProperty(`species`))


// console.log(lucas.__proto__) // Proto methods for Person`s iterations, like jay and lucas.
// console.log(lucas.__proto__.__proto__) // Top of proto chain. Prototype`s prototype.
// console.log(lucas.__proto__.__proto__.__proto__) // returns null

console.dir(Person.prototype.constructor)
console.dir(Person.prototype.constructor.__proto__)

Array.prototype.test = () => console.log(`Test successful`)

const h1 = document.querySelector(`.test-h1`)
console.dir(h1) // Read my prototype, then it`s prototype and so on until you hit null.