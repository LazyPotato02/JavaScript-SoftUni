function party(input) {
    let maiden_party_price = Number(input[0])
    let love_letters = Number(input[1])
    let roses = Number(input[2])
    let keychains = Number(input[3])
    let caricatures = Number(input[4])
    let lucky_surprises = Number(input[5])
    let discount = 0
    

    let articul_count = love_letters + roses + keychains + caricatures + lucky_surprises

    let sum = (love_letters * 0.60) + (roses * 7.20) + (keychains * 3.60) + (caricatures * 18.20) + (lucky_surprises * 22)
    if (articul_count >= 25){
        discount = Number((sum * 0.35).toFixed(2))
    }

    let total_sum = sum - discount
    let hosting = total_sum * 0.10

    let winnings = total_sum - hosting
    let left_money = winnings - maiden_party_price

    if (winnings >= maiden_party_price){
        console.log(`Yes! ${left_money.toFixed(2)} lv left.`)
    }else{
        console.log(`Not enough money! ${Math.abs(left_money.toFixed(2))} lv needed.`)
    }

}
party(["40.8",
"20",
"25",
"30",
"50",
"10"])