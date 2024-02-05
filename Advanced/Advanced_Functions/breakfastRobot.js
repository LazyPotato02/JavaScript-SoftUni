function breakfastRobot() {
    let protein = 0
    let carbohydrate = 0
    let fat = 0
    let flavours = 0
    let menu = {
        'apple': {
            'carbohydrate': 1,
            'flavour': 2
        },
        'lemonade': {
            'carbohydrate': 10,
            'flavour': 20
        },
        'burger': {
            'carbohydrate': 5,
            'fat': 7,
            '3': 'flavour'
        },
        'eggs': {
            'protein': 5,
            'fat': 1,
            'flavour': 1
        },
        'turkey': {
            'protein': 10,
            'carbohydrate': 10,
            'fat': 10,
            'flavour': 10
        }

    }

    function manager(val) {

        let value = val.split(' ')
        let command = value.shift()

        // Use for the prepare command
        // let ingredient = value.shift()
        // let ingredientQuantity = Number(value.shift())
        // for (const ingredientKey in menu[ingredient]) {
        //     let neededIngredient = menu[ingredient][ingredientKey]
        // }
    }

    return manager


}

let manager = breakfastRobot();
console.log(manager("restock flavour 50"))// Success
console.log(manager("prepare lemonade 4"))// Error: not enough carbohydrate in stock