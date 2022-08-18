function printSum(from,to_n){
    let total_num = 0
    let numbers = []
    for (let i = from;i <= to_n; i++ ){
        total_num += i
        numbers.push(i)
    }
    console.log(numbers.join(' '))
    console.log(`Sum: ${total_num}`)
}

printSum(5, 10)