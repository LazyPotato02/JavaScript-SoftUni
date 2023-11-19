function solve(input) {
    let pattern = /%(?<customer>[A-Z][a-z]*)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/;
    let currentLine = input.shift();
    let totalPrice = 0;

    while (currentLine != 'end of shift') {
        let currentOrder;
        if ((currentOrder = pattern.exec(currentLine))) {
            let { customer, product, count, price } = currentOrder.groups;
            totalPrice += count * price;
            console.log(`${customer}: ${product} - ${(count * price).toFixed(2)}`);
        }
        currentLine = input.shift();
    }

    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}