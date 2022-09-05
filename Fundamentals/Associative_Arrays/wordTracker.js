function worldTracker(arr) {
    let wordToFound = arr.shift().split(' ')
    let word1 = wordToFound[0]
    let word2 = wordToFound[1]
    const count = new Map()
    for (v of arr) {
        if (v == word1) {
            count.set(v, count.get(v) + 1 || 1)
        } else if (v == word2) {
            count.set(v, count.get(v) + 1 || 1)
        }

    }
    console.log(count)
    let sorted = Array.from(count.entries())
        .sort((a, b) => a[1] - b[1]);
    for (let kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}
worldTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])