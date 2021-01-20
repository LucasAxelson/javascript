function dieRoll() {
    return Math.floor(Math.random() * 6 + 1);
}

const doublesRoll = function () {
    console.log(dieRoll());
    console.log(dieRoll());
}

const die = {
    single() {
        return Math.floor(Math.random() * 6 + 1);
    },
    double() {
        console.log(dieRoll());
        console.log(dieRoll());
    },
    triple() {
        for (let i = 0; i < 3; i++) {
            console.log(dieRoll());
        }
    }
}