function solve(currentStock, orderedProducts) {
    let store = {}

    // Transfer list to obj

    for (let i = 0; i < currentStock.length; i += 2) {
        store[currentStock[i]] = Number(currentStock[i + 1])
    }
    // Add received products
    for (let i = 0; i < orderedProducts.length; i += 2) {
        // console.log(orderedProducts[i] ,orderedProducts[i+1])
        if (orderedProducts[i] in store) {
            store[orderedProducts[i]] += Number(orderedProducts[i + 1])
        } else {
            store[orderedProducts[i]] = Number(orderedProducts[i + 1])
        }
    }

    for (const storeKey in store) {
        console.log(`${storeKey} -> ${store[storeKey]}`)
    }

}

solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])

