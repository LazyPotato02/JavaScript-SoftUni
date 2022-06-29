function fishingBoat(input) {
    let budget = Number(input[0])
    let season = input[1]
    let fishers = Number(input[2])
    let discount = 0
    let boatPrice = 0
    switch (season) {
        case 'Spring':
            boatPrice = 3000;
            break;
        case 'Summer':
        case 'Autumn':
            boatPrice = 4200;
            break;
        case 'Winter':
            boatPrice = 2600;
            break;
    }
    if (fishers > 12) {
        boatPrice *= 0.75
    } else if (fishers >= 7 && fishers <= 11) {
        boatPrice *= 0.85
    } else if (fishers <= 6) {
        boatPrice *= 0.90
    }
    if (fishers % 2 === 0 && season != 'Autumn') {
        boatPrice *= 0.95
    }

    let leftMoney = Math.abs(budget - boatPrice)
    if (budget >= boatPrice) {
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${leftMoney.toFixed(2)} leva.`)
    }
}
fishingBoat(["2000",
"Winter",
"13"])





