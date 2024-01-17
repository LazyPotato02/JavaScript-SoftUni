function Add_and_Remove_Elements(commands) {
    let initialNumber = []
    let counter = 1
    for (const command of commands) {
        if (command === 'add'){
            initialNumber.push(Number(counter))
            counter++

        }else if (command === 'remove'){
            initialNumber.pop()
            counter++

        }

    }
    if (initialNumber.length === 0){
        console.log('Empty ')
    }else {
        console.log(initialNumber.join('\n'))
    }

}

Add_and_Remove_Elements(['remove',

    'remove',

    'remove'] )