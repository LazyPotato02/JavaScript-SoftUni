function primesNonPrimes(input) {
    primeNum = 0
    nonPrimeNum = 0
    while (true) {
        let command = input.shift()

        if (command === 'stop') {
            break;
        }
        command = Number(command)

        if (command < 0) {
            console.log('Number is negative.')
            continue
        }
        counter = 0
        for (i = 1; i <= command; i++) {
            if (command % i == 0) {
                counter++;
            }
        }
        if (counter == 2) {
            primeNum += command
        }else{
            nonPrimeNum += command
        }


    }

    console.log(`Sum of all prime numbers is: ${primeNum}`)
    console.log(`Sum of all non prime numbers is: ${nonPrimeNum}`)

}
primesNonPrimes(["30",
"83",
"33",
"-1",
"20",
"stop"])