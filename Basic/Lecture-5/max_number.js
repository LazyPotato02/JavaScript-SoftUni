function max_number(input){
    let number = input[0]
    let max_number = number
    let index = 0
    while (number !== 'Stop'){

        let num = Number(number)
        if (num > max_number){
            max_number = num
        }
        index++
        number = input[index]

    }
    console.log(max_number)
}   
max_number(["100",
"99",
"80",
"70",
"Stop"])


