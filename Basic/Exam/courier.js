function courier(input) {
    let package_weight = Number(input[0])
    let service_type = input[1]
    let distance_km = Number(input[2])
    let price_pe_km = 0


    if (package_weight < 1) {
        price_pe_km = 0.03
    } else if (package_weight > 1 && package_weight < 10) {
        price_pe_km = 0.05
    } else if (package_weight >= 10 && package_weight < 40) {
        price_pe_km = 0.10
    } else if (package_weight >= 40 && package_weight < 90) {
        price_pe_km = 0.15
    } else if (package_weight >= 90 && package_weight < 150) {
        price_pe_km = 0.20
    }
    let price = price_pe_km * distance_km

    let total_sum_discount = 0
    if (service_type === 'express'){
        switch (price_pe_km){
            case 0.03:
                total_sum_discount = 0.03 * 0.80
                break;
            case 0.05:
                total_sum_discount = 0.05 * 0.40
                break;
            case 0.10:
                total_sum_discount = 0.10 * 0.05
                break;
            case 0.15:
                total_sum_discount = 0.15 * 0.02
                break;
            case 0.20:
                total_sum_discount = 0.20 * 0.01
                break;

        }

        total_sum_discount = total_sum_discount * package_weight
    }
    let price_for_delivery = 0
    if (service_type = 'express'){
        price_for_delivery = (distance_km * total_sum_discount) + price
    }else{
        price_for_delivery = price
    }

    console.log(`The delivery of your shipment with weight of ${package_weight.toFixed(3)} kg. would cost ${price_for_delivery.toFixed(2)} lv.`)

}


courier(["87",
"express",
"130"])
