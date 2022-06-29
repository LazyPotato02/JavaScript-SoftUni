function operations(input) {
    let num1 = Number(input[0])
    let num2 = Number(input[1])
    let operator = input[2]
    let sum = 0
    let ev_odd = ''
    
    switch (operator) {
        case '+':
            sum = num1 + num2
            break;
        case '-':
            sum = num1 - num2
            break;
        case '*':
            sum = num1 * num2
            break;
        case '/':
            sum = num1 / num2
            break;
        case '%':
            sum = num1 % num2
            break;
    }

    if (operator === '/' || operator === '%'){
        if (num2 <= 0){
            console.log(`Cannot divide ${num1} by zero`)
            return
        }else if (operator === '%'){
            console.log(`${num1} % ${num2} = ${sum}`)
        }else if (operator === '/'){
            console.log(`${num1} / ${num2} = ${sum.toFixed(2)}`)
        }
    }else{
        if (sum % 2 === 0){
            ev_odd = 'even'
        }else{
            ev_odd = 'odd'
        }
        console.log(`${num1} ${operator} ${num2} = ${sum} - ${ev_odd}`)
    }


    if (sum % 2 === 0){
        ev_odd = 'even'
    }else{
        ev_odd = 'odd'
    }
}
operations(["10",
"0",
"%"])



