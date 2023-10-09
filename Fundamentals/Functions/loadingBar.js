function loading(percent){
    let count = percent / 10
    let needed = 10 - count
    console.log(`${percent}% [${'%'.repeat(count)}${'.'.repeat(needed)}]`)
    console.log('Still loading...')
}

loading(30)