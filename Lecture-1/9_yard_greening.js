function yard_greening(input){
    let price_tax = input[0];
    let sum_1 = price_tax * 7.61
    let discount = sum_1 * 0.18
    let final = sum_1 - discount
    console.log(`The final price is: ${final} lv.`)
    console.log(`The discont is: ${discount} lv.`)
}



yard_greening(["550"])
yard_greening(["150"])



