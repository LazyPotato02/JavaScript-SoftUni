function addSubstract(numbers) {
    let ll = []
    let n = 0
    for (let idx = 0; idx < numbers.length; idx++) {
        if (numbers[idx] % 2 == 0) {
            n = numbers[idx] + idx
        } else {
            n = numbers[idx] - idx
        }
        ll.push(n)
    }

    console.log(ll)
    sum = sumNumbersList(numbers)
    console.log(sum)
    sum = sumNumbersList(ll)
    console.log(sum)

    function sumNumbersList(nums) {
        const sum = nums.reduce((accumulator, value) => {
            return accumulator + value;
        }, 0);
        return sum
    }
}


addSubstract([-5, 11, 3, 0, 2])