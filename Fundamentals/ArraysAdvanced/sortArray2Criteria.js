function sortArraybyCriteria(array) {
    let sortedArray = array.sort(function (a, b) {
        // ASC  -> a.length - b.length
        // DESC -> b.length - a.length
        return a.length - b.length;
    },function (a, b) {return a - b})

    console.log(sortedArray)
}

sortArraybyCriteria(['alpha', 'beta', 'gamma'])