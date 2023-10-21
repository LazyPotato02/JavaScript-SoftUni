function solve(arr) {
    let array = arr.shift().split('!')
    
    command = arr.shift()
    
    while (command != 'Go Shopping!'){
        let splitted = command.split(' ')
        let com = splitted.shift()
        if (com == 'Urgent'){

            let item = splitted.shift()

            if (!(array.indexOf(item) >= 0)){
                array.unshift(item)
            }

        }else if(com == 'Unnecessary'){

            let item = splitted.shift()
            if ((array.indexOf(item) >= 0)){
                array = array.filter(el => el != item)

            }

        }else if(com == 'Correct'){

            let item1 = splitted.shift()
            let item2 = splitted.shift()


            
            let idx1 = array.indexOf(item1)

            if ((array.indexOf(item1) >= 0)){
                array[idx1] = item2
            }

        }else if(com == 'Rearrange'){
            let item = splitted.shift()
            if ((array.indexOf(item) >= 0)){
                array = array.filter(el => el != item)
                array.push(item)

            }
        }
        command = arr.shift()
    }
    console.log(array.join(', '))
}

solve((["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]))
// solve((["Milk!Pepper!Salt!Water!Banana",
//     "Urgent Salt",
//     "Unnecessary Grapes",
//     "Correct Pepper Onion",
//     "Rearrange Grapes",
//     "Correct Tomatoes Potatoes",
//     "Go Shopping!"]))