function solve(inp) {
    let array = inp.shift().split(' ').map(Number)

    command = inp.shift().split(' ')

    while (command != 'end') {

        let comm = command.shift()
        if (comm == 'swap') {
            let idx1 = Number(command.shift())
            let idx2 = Number(command.shift())
            
            let val1 = array[idx1]
            let val2 = array[idx2]

            array[idx2] = val1
            array[idx1] = val2

        } else if (comm == 'multiply'){
            let idx1 = Number(command.shift())
            let idx2 = Number(command.shift())

            let val1 = array[idx1]
            let val2 = array[idx2]

            let sum = val1 * val2
            array[idx1] = sum

        } else if (comm == 'decrease'){
            for (let index = 0; index < array.length; index++) {
                array[index]--;
                
            }
        }


        command = inp.shift().split(' ')

    }
    console.log(array.join(', '))
}

// solve([
//     '23 -2 321 87 42 90 -123',
//     'swap 1 3',
//     'swap 3 6',
//     'swap 1 0',
//     'multiply 1 2',
//     'multiply 2 1',
//     'decrease',
//     'end'
// ])
solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
])