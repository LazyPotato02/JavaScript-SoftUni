function inventory(arr){
    let heroes = []

    for (let hero of arr){
        let obj = {}
        let values = hero.split(' / ')
        let name = values.shift()
        let level = +values.shift()
        let items = []

        values = String(values)
        values = values.split(', ')
        for (let item of values){
            items.push(item)
        }
        obj['name'] = name
        obj['level'] = level
        obj['items'] = items
        heroes.push(obj)
        
    }   
    heroes.sort((a, b) => {
        return a.level - b.level;
    });
    for (h of heroes){
        items_str = h.items.join(', ')
        console.log(`Hero: ${h.name}\nlevel => ${h.level}\nitems => ${items_str}`)
    }

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])