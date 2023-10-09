function arrayRotation(array, rotations){
    for (let i = 0; i < rotations; i++){
        nToRotate = array.shift()
        array.push(nToRotate)
    }
    console.log(...array);


}
arrayRotation([2, 4, 15, 31], 5)