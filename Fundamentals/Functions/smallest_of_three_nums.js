function smallestNumbers(nums){
    let minNumber = 9999999
    for (el of nums){
        if (el < minNumber){
            minNumber = el
        }
    }
    console.log(minNumber)
}

smallestNumbers([25,
    21,
    4])