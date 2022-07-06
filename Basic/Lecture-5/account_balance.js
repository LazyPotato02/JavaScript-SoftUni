function balance(input){
    let command = input[0]
    let index = 0
    let balance = 0
    while (command !== 'NoMoreMoney'){
        let num = Number(command);

        if (num < 0){
            console.log('Invalid operation!');
            break;
        }
        console.log(`Increase: ${num.toFixed(2)}`)

        balance += num;
        index++;
        command = input[index];
    }
    console.log(`Total: ${balance.toFixed(2)}`);
}
balance(["120",
"45.55",
"-150"])