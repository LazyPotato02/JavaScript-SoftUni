function solve() {
    let result = {}
    for (let arg of arguments) {
        let type = typeof arg
        console.log(`${type}: ${arg}`)

        if (!(result[type])) {
            result[type] = 0
        }
        result[type] += 1

    }
    let sorted = []
    for (const resultKey in result) {
        sorted.push([resultKey, result[resultKey]])
    }
    sorted.sort(function (a, b) {
        return b[1] - a[1];
    });

    for (const sortKey of sorted) {
        let [type, count] = sortKey
        console.log(`${type} = ${count}`)
    }
}

// function solve() {
//
// }
solve({name: 'bob'}, 3.333, 9.999)