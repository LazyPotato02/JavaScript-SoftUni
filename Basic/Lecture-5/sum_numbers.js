function sumNumbers(input){
    let target = Number(input.shift());
    let sum = 0;
    while (sum <= target){
        if (sum >= target){
            break}
        num = Number(input.shift());
        sum += num
    }
    console.log(sum)
}
sumNumbers(["100", "10", "20", "30", "40"])