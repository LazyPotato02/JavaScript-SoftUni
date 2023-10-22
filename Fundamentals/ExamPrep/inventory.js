function solve(params) {
    let inventory = params.shift().split(', ')

    command = params.shift().split(' - ')

    while (command != 'Craft!'){
        comm = command.shift()

        if (comm == 'Collect'){

            let item = command.shift()
            if (!(inventory.indexOf(item)> 0)){
                inventory.push(item)
            }

        }else if(comm == 'Drop'){

            let item = command.shift()
            if (inventory.indexOf(item)> 0){
                inventory = inventory.filter(el => el != item)
            }

        }else if(comm == 'Combine Items'){

            command = String(command).split(':')

            let oldItem = command.shift()
            let newItem = command.shift()

            let oldIndex = inventory.indexOf(oldItem)
            let newInventory = [
                ...inventory.splice(0, oldIndex+1),
                newItem,
                ...inventory.splice(oldIndex, inventory.length)
            ]
            inventory = newInventory

        }else if(comm == 'Renew'){

            let item = command.shift()
            inventory = inventory.filter(el => el != item)
            inventory.push(item)

        }

        command = params.shift().split(' - ')

    }
    console.log(inventory.join(', '));
}

// solve([
//     'Iron, Wood, Sword',
//     'Collect - Gold',
//     'Drop - Wood',
//     'Craft!'
// ])

solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])