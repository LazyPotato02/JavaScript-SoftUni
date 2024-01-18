function extract_Increasing_Subset_from_Array(arr) {
    let result = []
    let lastBiggest = 0
    for (const arrElement of arr) {
        if (arrElement >= lastBiggest){
            result.push(arrElement)
            lastBiggest = arrElement
        }
    }
   return result

}

extract_Increasing_Subset_from_Array([20,

    3,

    2,

    15,

    6,

    1] )