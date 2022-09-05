function minerTask(arr){
    let miner = {}

    for (let i = 0;i < arr.length;i+= 2){
        let key = arr[i]
        let value = arr[i + 1]
        if (key in miner){
            miner[key] += Number(value)
        }else{
            miner[key] = Number(value)
        }
    }
    for (let v in miner){
        console.log(`${v} -> ${miner[v]}`)
    }
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
])

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])