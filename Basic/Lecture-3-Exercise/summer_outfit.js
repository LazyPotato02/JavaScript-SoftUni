function clothes(input) {
    let outfit = '';
    let shoes = '';
    let timeDay = input[1]
    let temperature = Number(input[0])

    if (10 <= temperature && temperature <= 18) {
        if (timeDay === 'Morning') {
            outfit = 'Sweatshirt'
            shoes = 'Sneakers'
        } else if (timeDay === 'Afternoon') {
            outfit = 'Shirt'
            shoes = 'Moccasins'
        } else if (timeDay === 'Evening') {
            outfit = 'Shirt'
            shoes = 'Moccasins'
        }
    } else if (18 <= temperature && temperature <= 24) {
        if (timeDay === 'Morning') {
            outfit = 'Shirt'
            shoes = 'Moccasins'
        } else if (timeDay === 'Afternoon') {
            outfit = 'T-Shirt'
            shoes = 'Sandals'
        } else if (timeDay === 'Evening') {
            outfit = 'Shirt'
            shoes = 'Moccasins'
        }
    } else if (temperature >= 25) {
        if (timeDay === 'Morning') {
            outfit = 'T-Shirt'
            shoes = 'Sandals'
        } else if (timeDay === 'Afternoon') {
            outfit = 'Swim Suit'
            shoes = 'Barefoot'
        } else if (timeDay === 'Evening') {
            outfit = 'Shirt'
            shoes = 'Moccasins'
        }
    }
    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`)
}
clothes(["22",
    "Afternoon"])