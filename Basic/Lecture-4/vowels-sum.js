function vowelsSum(input){
    let str = input[0]
    let len = str.length
    let sum = 0
    for (let i = 0; i < len; i ++) {
        let char = str[i]
        switch (char){
            case 'a':
                sum += 1
                break;
            case 'e':
                sum += 2
                break;
            case 'i':
                sum += 3
                break;
            case 'o':
                sum += 4
                break;
            case 'u':
                sum += 5
                break;
        }
    }
    console.log(sum)
}

vowelsSum(["hi"])