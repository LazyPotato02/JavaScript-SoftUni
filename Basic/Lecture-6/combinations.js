function combination(input){
    let wanted_num = Number(input[0])
    let valid_combinations = 0
    for(x = 0; x <= wanted_num; x++){
        for(y = 0; y <= wanted_num; y++){
            for(z = 0; z <= wanted_num; z++){
                let product = x + y + z
                if (product == wanted_num){
                    valid_combinations++
                }
            }
        }
    }
    console.log(valid_combinations)

}
combination(["25"])