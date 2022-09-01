function searchNumber(array,limiters){
    let arr = array
    let takeFromArr = limiters[0]
    let removeElements = limiters[1]
    let searchedNum = limiters[2]
    let workArray = []

    for (let i = 0; i < takeFromArr; i++){
        workArray.push(arr[i])
    }

    for (let i = 0; i < removeElements;i++){
        workArray.shift()
    }

    let counter = 0;
    for (el of arr) {
        if (el == searchedNum) {
            counter++;
        }
    };
    console.log(`Number ${searchedNum} occurs ${counter} times.`)


}

searchNumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5])