function sale(input) {
    let sea_packet = Number(input.shift())
    let mountain_packet = Number(input.shift())
    let total_price = 0
    while (sea_packet > 0 || mountain_packet > 0) {

        let excursion_type = input.shift()

        if (excursion_type === 'Stop') { break }


        if (excursion_type === 'sea') {
            if (sea_packet > 0) {
                sea_packet--
                total_price += 680
            }
        } else if (excursion_type === 'mountain') {
            if (mountain_packet > 0) {
                mountain_packet--
                total_price += 499
            }
        }


    }

    if (sea_packet === 0 && mountain_packet === 0) {
        console.log(`Good job! Everything is sold.`)
    }
    console.log(`Profit: ${total_price} leva.`)


}
sale(["2",
"2",
"sea",
"mountain",
"sea",
"sea",
"mountain"])