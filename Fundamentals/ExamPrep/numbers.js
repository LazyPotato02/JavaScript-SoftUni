function solve(nums) {
    let convertedNums = nums.split(' ').map(Number)
    let totalSum = 0
    let foundNums = []
    for (let index = 0; index < convertedNums.length; index++) {
        totalSum += convertedNums[index]
    }

    let avgSum = totalSum / convertedNums.length;

    for (let index = 0; index < convertedNums.length; index++) {
        if (convertedNums[index] > avgSum){
            foundNums.push(convertedNums[index])
        }
    }

    foundNums = foundNums.sort(function (a, b) {  return a - b; });
    foundNums = foundNums.slice(Math.max(foundNums.length - 5, 0))
    foundNums = foundNums.sort(function(a, b){return b-a});
    if (foundNums.length > 0){
        console.log(foundNums.join(' '))
    }else{
        console.log('No');
    }

}

// solve('10 20 30 40 50')
// solve('5 2 3 4 -10 30 40 50 20 50 60 60 51')
// solve('1')

solve('-1 -2 -3 -4 -5 -6')