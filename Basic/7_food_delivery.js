function food_delivery(input) {
    let chichen_menu = Number(input[0]) * 10.35
    let fish_menu = Number(input[1]) * 12.40
    let vegan_menu = Number(input[2]) * 8.15
    let food_price = chichen_menu + fish_menu + vegan_menu
    let desert_price = food_price * 0.20
    let total = food_price + desert_price + 2.50

    console.log(total)
}

food_delivery(["2", "4", "3"])