function solve(arr, option){

    if (option === 'asc'){
        return arr.sort(function(a, b){return a-b})
    }else if (option === 'desc'){
        return arr.sort(function(a, b){return b-a})

    }
}

solve([14, 7, 17, 6, 8], 'desc')