function toy_shop(input){
    let vac_price = Number(input[0])
    let puzzel = Number(input[1])
    let speaking_dools = Number(input[2])
    let teddy_bears = Number(input[3])
    let minions = Number(input[4])
    let trucks = Number(input[5])
    
    let sum = (puzzel * 2.60) + (speaking_dools * 3) + (teddy_bears * 4.10) + (minions * 8.20) + (trucks * 2)
    let toy_count = puzzel + speaking_dools + teddy_bears + minions + trucks
    if (toy_count >= 50){
        let discount = sum * 0.25
        sum = sum - discount
    }
    rent = sum * 0.10
    income = sum - rent
    final_income = income - vac_price
    if (final_income >= 0){
        console.log(`Yes! ${final_income.toFixed(2)} lv left.`)
    }else{
        console.log(`Not enough money! ${Math.abs(final_income).toFixed(2)} lv needed.`)
    }
}

// toy_shop(["40.8","20","25","30","50","10"])

toy_shop((["320","8","2","5","5","1"]))