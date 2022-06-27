function fruitVegetable(input) {
    let usr_inp = input[0]
    let fruit = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes']
    let vegetable = ['tomato', 'cucumber', 'pepper', 'carrot']
    if (fruit.includes(usr_inp)){
        console.log('fruit');
    }else if (vegetable.includes(usr_inp)){
        console.log('vegetable');
    }else{
        console.log('unknown');
    }
}
fruitVegetable(["water"])
