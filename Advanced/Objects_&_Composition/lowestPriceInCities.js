function lowestPriceInCities(arr) {
    let products = {}
    for (const arrElement of arr) {

        let [townName, productName, productPrice] = arrElement.split(' | ')
        if (products[productName]) {
            if (Number(productPrice) < Number(products[productName].price)) {
                products[productName].name = townName
                products[productName].price = Number(productPrice)
            }
        } else {
            products[productName] = {name: townName, price: Number(productPrice)}
        }
    }

    for (let product in products) {
        let name = products[product].name
        let price = products[product].price
        console.log(`${product} -> ${price} (${name})`)
    }

}


lowestPriceInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'])


