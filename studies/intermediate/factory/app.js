function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`
}

function makeColor(r, g, b) {
    const color = {}
    color.r = r
    color.g = g
    color.b = b
    color.rgb = () => {
        const { r, g, b } = this
        return `rgb(${r}, ${g}, ${b})`
    }
    color.hex = (r, g, b) => {
        const { r, g, b } = this
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        )
    }
    return color
}

const firstColor = makeColor(255, 45, 65)
firstColor.hex()