function sum_of_two_nums(input) {
    let starting_point = Number(input[0])
    let ending_point = Number(input[1])
    let wanted_num = Number(input[2])
    let combinations = 0
    let isFound = false
    let valid_combinations = 0
    for (x = starting_point; x <= ending_point; x++) {
        for (y = starting_point; y <= ending_point; y++) {
            let product = x + y
            if (product == wanted_num) {
                combinations++
                console.log(`Combination N:${combinations} (${x} + ${y} = ${product})`)
                isFound = true
                valid_combinations++
                break;
            }
            combinations++
        }
        if (isFound === true){
            break;
        }
    }
    if (valid_combinations === 0) {
        console.log(`${combinations} combinations - neither equals ${wanted_num}`)
    }
}
sum_of_two_nums(["88",
"888",
"2000"])

