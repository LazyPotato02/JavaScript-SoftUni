function Fruits(fruitType,weightInGrams, pricePerKg){
    let weightInKg = weightInGrams / 1000
    let TotalPrice = pricePerKg * weightInKg

    console.log(`I need $${TotalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitType}.`)

}

// Fruits('orange', 2500, 1.80 )
Fruits('apple', 1563, 2.35 )