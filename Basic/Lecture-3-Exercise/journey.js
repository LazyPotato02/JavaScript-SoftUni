function journey(input) {
    let budget = Number(input[0])
    let season = input[1]
    let country = ''
    let price = budget
    let place = ''
    if (budget <= 100) {
        country = 'Bulgaria'
        if (season === 'summer'){
            price *= 0.70
            place = 'Camp'
        }else if (season === 'winter'){
            price *= 0.30
            place = 'Hotel'
        }
    } else if (budget <= 1000) {
        country = 'Balkans'
        if (season === 'summer'){
            price *= 0.60
            place = 'Camp'
        }else if (season === 'winter'){
            price *= 0.20
            place = 'Hotel'
        }
    } else if (budget > 1000) {
        country = 'Europe'
        price *= 0.10
        place = 'Hotel'
    }
    let sum = budget - price
    
    console.log(`Somewhere in ${country}`)
    console.log(`${place} - ${sum.toFixed(2)}`)

}

journey(["1500", "summer"])



