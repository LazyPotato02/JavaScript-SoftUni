function min_number(input){
    let number = input[0]
    let min_number = number
    let index = 0
    while (number !== 'Stop'){

        let num = Number(number)
        if (num < min_number){
            min_number = num
        }
        index++
        number = input[index]

    }
    console.log(min_number)
}   
min_number(["-1",
"-2",
"Stop"])




