function heroicInventory(arr) {
    // console.log(arr)
    let heroicInventory = []
    for (let arrKey of arr) {
        let [name,level,items] = arrKey.split(' / ')
        level = Number(level)
        items = items ? items.split(', ') : []
        heroicInventory.push({name,level,items})
    }
    console.log(JSON.stringify(heroicInventory))
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'] )