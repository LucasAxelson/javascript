// function color(r, g, b) {
//     this.r = r
//     this.g = g
//     this.b = b
// }

// Color.prototype.rgb = function () {
//     const { r, g, b } = this
//     return `rgb(${r}, ${g}, ${b})`
// }

// Color.prototype.hex = function () {
//     const { r, g, b } = this
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// }

// Color.prototype.rgba = function (a = 1.0) {
//     const { r, g, b } = this
//     return `rgba(${r}, ${g}, ${b}, ${a})`
// }


// const color1 = new Color(29, 244, 64)
// const color2 = new Color(12, 134, 33)

class Color {
    constructor(r, g, b, name) {
        this.r = r
        this.b = b
        this.g = g
        this.name = name
    }
    innerRGB() {
        const { r, g, b } = this
        return `${r}, ${g}, ${b}`

    }
    rgb() {
        return `rgb(${this.innerRGB()})`
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`
    }
    hex() {
        const { r, g, b } = this
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    }
}

const black = new Color(0, 0, 0, 'black')
const white = new Color(255, 255, 255, 'white')