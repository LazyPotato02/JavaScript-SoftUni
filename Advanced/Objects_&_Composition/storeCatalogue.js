function storeCatalogue(arr) {
    arr = arr.sort()
    let storeObj = {}
    for (const arrElement of arr) {

        let productAlphabet = arrElement[0]
        if (storeObj[productAlphabet]){
            let tmp = arrElement.split(' : ')
            tmp = tmp.join(': ')
            storeObj[productAlphabet].push(tmp)
        }else{
            let tmp = arrElement.split(' : ')
            tmp = tmp.join(': ')

            storeObj[productAlphabet] = [tmp]

        }
    }
    for (const storeObjElement in storeObj) {
        let storeElement  = storeObj[storeObjElement]
        console.log(`${storeObjElement}`)

        for (let i = 0; i < storeElement.length; i++) {
            console.log(`  ${storeElement[i]}`)
        }
    }

}

storeCatalogue(['Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10'])