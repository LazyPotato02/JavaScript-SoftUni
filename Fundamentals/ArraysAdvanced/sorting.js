function Sorting(array){
    array = array.sort(function(a, b){return a-b})
    let sortedNumbers = []
    while (array.length > 0){
        a = array.pop()
        b = array.shift()
        sortedNumbers.push(a)
        sortedNumbers.push(b)
    }
    console.log(sortedNumbers)
    
}
Sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])