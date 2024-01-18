function sorting_Numbers(arr){
    let sortedArr = arr.sort(function (a,b){return a-b})
    let resultArr = []
    // console.log(arr)
    let arrLength = arr.length / 2
    for (let i = 0; i < arrLength; i++) {

        let tmp1 = sortedArr.shift()
        let tmp2 = sortedArr.pop()
        resultArr.push(tmp1)
        resultArr.push(tmp2)
    }
    return resultArr
}

// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
// sorting_Numbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56] )

// [2, 63, 3, 54, 9, 22, 11, 21, 18, 19]
sorting_Numbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18] )