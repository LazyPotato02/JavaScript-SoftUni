function rotate_Array(array, rotations) {
    let result = array
    for (let i = 0; i < rotations; i++) {
        let tmp = result.pop()
        result.unshift(tmp)

    }
    console.log(result.join(' '))
}

// rotate_Array(['1',
//
//         '2',
//
//         '3',
//
//         '4'],
//
//     2 )
//
rotate_Array(['Banana',

        'Orange',

        'Coconut',

        'Apple'],

    15 )