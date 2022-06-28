function new_home(input) {
    let flowerType = input[0]
    let flowerCount = Number(input[1])
    let budget = Number(input[2])
    let pricePerFlower = 0
    let discount = 0
    switch (flowerType) {
        case 'Roses':
            pricePerFlower = 5;
            break;
        case 'Dahlias':
            pricePerFlower = 3.80;
            break;
        case 'Tulips':
            pricePerFlower = 2.80;
            break;
        case 'Narcissus':
            pricePerFlower = 3;
            break;
        case 'Gladiolus':
            pricePerFlower = 2.50;
            break;
    }
    let FlowerPrice = pricePerFlower * flowerCount

    if (flowerCount > 80 && flowerType === 'Roses') {
        discount = FlowerPrice * 0.10
        FlowerPrice = FlowerPrice - discount
    } else if (flowerCount > 90 && flowerType === 'Dahlias') {
        discount = FlowerPrice * 0.15
        FlowerPrice = FlowerPrice - discount
    } else if (flowerCount > 80 && flowerType === 'Tulips') {
        discount = FlowerPrice * 0.15
        FlowerPrice = FlowerPrice - discount
    } else if (flowerCount < 120 && flowerType === 'Narcissus') {
        discount = FlowerPrice * 0.15
        FlowerPrice = FlowerPrice + discount
    } else if (flowerCount < 80 && flowerType === 'Gladiolus') {
        discount = FlowerPrice * 0.20
        FlowerPrice = FlowerPrice + discount
    }

    let leftBudget = Math.abs(budget - FlowerPrice)

    if (FlowerPrice <= budget) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${leftBudget.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${leftBudget.toFixed(2)} leva more.`)
    }
}
new_home(["Narcissus",
"119",
"360"])

