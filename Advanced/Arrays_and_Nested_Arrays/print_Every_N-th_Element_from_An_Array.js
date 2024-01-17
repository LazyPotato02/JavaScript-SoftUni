function print_Every_NTh_Element_from_An_Array(stringArray,steps) {
    let result = []
    for (let i = 0; i < stringArray.length; i+=steps) {
        result.push(stringArray[i])
    }
   return result
}

console.log(print_Every_NTh_Element_from_An_Array(['dsa',

        'asd',

        'test',

        'tset'],

    2  ))