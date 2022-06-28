function cinema(input) {
    let type = input[0]
    let rows = Number(input[1])
    let cols = Number(input[2])
    let price = 0
    switch (type) {
        case 'Premiere':
            price = 12.00;
            break;
        case 'Normal':
            price = 7.50;
            break;
        case 'Discount':
            price = 5.00;
            break;
    }

    let sum = (rows * cols) * price
    console.log(`${sum.toFixed(2)} leva`)
}
cinema(["Premiere",
    "10",
    "12"])