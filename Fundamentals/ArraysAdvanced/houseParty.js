function houseParty(arr){
    let guestList = []
    for (el of arr){
        if (el.includes('is going')){
            let name = el.split(' ')[0]
            if (guestList.includes(name)){
                console.log(`${name} is already in the list!`)
                continue
            }
            guestList.push(name)
        }else if (el.includes('is not going')){
            let name = el.split(' ')[0]
            if (guestList.includes(name)){
                idx = guestList.indexOf(name)
                guestList.splice(idx,1)
            }else{
                console.log(`${name} is not in the list!`)
            }
        }
    }
    console.log(guestList.join('\n'))
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])