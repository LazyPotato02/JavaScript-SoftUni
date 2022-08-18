function vacation(peoples, groupType, dayWeek) {
    let price = 0
    if (groupType === 'Students') {
        switch (dayWeek) {
            case 'Friday':
                price = 8.45;
                break;
            case 'Saturday':
                price = 9.80;
                break;
            case 'Sunday':
                price = 10.46;
                break;
        }
    } else if (groupType === 'Business') {
        switch (dayWeek) {
            case 'Friday':
                price = 10.90;
                break;
            case 'Saturday':
                price = 15.60;
                break;
            case 'Sunday':
                price = 16;
                break;
        }
    } else if (groupType === 'Regular') {
        switch (dayWeek) {
            case 'Friday':
                price = 15;
                break;
            case 'Saturday':
                price = 20;
                break;
            case 'Sunday':
                price = 22.50;
                break;
        }
    }
    if (groupType === 'Students') {
        price = price * peoples

        if (peoples >= 30) {
            price = price - (price * 0.15)
        }
    } else if (groupType === 'Business') {
        if (peoples >= 100) {
            peoples -= 10
        }
        price = price * peoples
    } else if (groupType === 'Regular') {
        price = price * peoples

        if (peoples >= 10 && peoples <= 20){
            price = price - (price * 0.05)
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`)
}

vacation(40,
    "Regular",
    "Saturday"
)