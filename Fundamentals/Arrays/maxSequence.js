function getMaxSequence(arr) {
    let maxCount = 0;
    let maxCountDigit = 0;
    for (let i = 0; i < arr.length; i++) {
        let curDigit = Number(arr[i]);
        let count = 0;
        for (let j = i + 1; j < arr.length; j++) {
            if (Number(arr[j]) == curDigit) {
                count++;
                if (maxCount < count) {
                    maxCount = count;
                    maxCountDigit = curDigit;
                }
            } else {
                break;
            }
        }
    }
    let array = new Array(maxCount + 1).fill(maxCountDigit);
    console.log(array.join(" "));
}
getMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);