function list_of_Names(arr) {

    let sortedArray = arr.sort()
    let i = 0
    sortedArray.forEach(el => {
        i++
        console.log(`${i}.${el}`)
    })

}

list_of_Names(["John", "Bob", "Christina", "Ema"])