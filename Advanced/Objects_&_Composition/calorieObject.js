function calorieObject(input) {
    let calorieObjects = {}

    for (let i = 0; i < input.length; i += 2) {
        let prod = input[i]
        let calories = Number(input[i + 1])
        calorieObjects[prod] = calories
    }
    console.log(calorieObjects)
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'] )