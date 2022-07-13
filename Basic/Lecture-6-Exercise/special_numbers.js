function numbers(input) {
    let n = Number(input[0])
    let s = ''

    for (let i = 1111; i <= 10000; i++) {
        let special = true
        let sNumber = i.toString();
        for (let i = 0; i < sNumber.length; i++) {
            let process = sNumber.charAt(i);
            if (n % process != 0 || process === 0) {
                special = false
                break;
            }

        }
        if (special){
            s += i + ' '
        }

    }
    console.log(s)
}

numbers(["16"])