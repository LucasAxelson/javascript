// Mass in Kilograms (KG) -- Height is Meters (M)
// BMI = mass / height ** 2 = mass / (height * height)

const Mark1 = {
    height: 1.69,
    weight: 78,
    BMI() {
        return BMIcalc(this.weight, this.height)
    }
}

const John1 = {
    height: 1.95,
    weight: 92,
    BMI() {
        return BMIcalc(this.weight, this.height)
    }
}

function BMIcalc(mass, height) {
    let BMI = mass / height ** 2
    return BMI.toFixed(2)
}

let markHigherBMI = John1.BMI() < Mark1.BMI()

if (markHigherBMI == true) {
    console.log(`Mark's BMI (${Mark1.BMI()}) is higher than John's (${John1.BMI()})!`)
} else {
    console.log(`Johns's BMI (${John1.BMI()}) is higher than Mark's (${Mark1.BMI()})!`)
}
