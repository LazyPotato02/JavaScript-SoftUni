function partyTime(arr){
    let guestList = []
    let vipGuestList = []
    let aattend = []
    while (true){
        let value = arr.shift()
        if (value === 'PARTY'){
            break
        }
        if (Number.isInteger(Number(value[0]))){
            vipGuestList.push(value)
        }else{
            guestList.push(value)
        }
    }
    for (arrived of arr){
        if (Number.isInteger(Number(arrived[0]))){
            let idx = vipGuestList.indexOf(arrived)
            delete vipGuestList[idx]
        }
        else{
            let idx = guestList.indexOf(arrived)
            delete guestList[idx]
        }
    }
    let result = []
    for (v of vipGuestList){
        if (v !== undefined){
            result.push(v)
        }
    }
    for (v of guestList){
        if (v !== undefined){
            result.push(v)
        }
    }
    console.log(result.length)
    console.log(result.join('\n'))

}
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
])