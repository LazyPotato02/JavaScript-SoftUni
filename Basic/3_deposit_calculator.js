function deposit_calc(input){
    let deposit = Number(input[0])
    let deposit_period = Number(input[1])
    let yearly_percent = Number(input[2])
    let sum = deposit + (((deposit * (yearly_percent / 100)) / 12) * deposit_period)
    console.log(sum)
}

deposit_calc(["200","3","5.7"])