function solve(inp){
    let initialHealth = 100
    let totalBitcoin = 0
    let arr = inp.split('|')
    let roomCount = 1
    while (arr.length > 0){
        let roomParams = arr.shift().split(' ')
        let comm = roomParams.shift()
        if (comm == 'potion'){
            let foundHealth = Number(roomParams.shift())
            if (initialHealth < 100){
                let neededHealth = 100 - initialHealth
                let temp = initialHealth
                initialHealth += foundHealth
                if (initialHealth > 100){
                    neededHealth = 100 - temp
                    initialHealth = 100
                    console.log(`You healed for ${neededHealth} hp.`)
                    console.log(`Current health: ${initialHealth} hp.`)
                }else{
                    console.log(`You healed for ${foundHealth} hp.`)
                    console.log(`Current health: ${initialHealth} hp.`)
                }


            }
        }else if (comm == 'chest'){
            let foundBitcoins = Number(roomParams.shift())
            totalBitcoin += foundBitcoins
            console.log(`You found ${foundBitcoins} bitcoins.`)
        }else{
            let attackDMG = Number(roomParams.shift())
            if (initialHealth - attackDMG > 0){
                initialHealth -= attackDMG
                console.log(`You slayed ${comm}.`)
            }else{
                console.log(`You died! Killed by ${comm}.`)
                console.log(`Best room: ${roomCount}`)
                break
            }
        }
        roomCount++
    }
    if(arr.length == 0){
        console.log(`You've made it!\nBitcoins: ${totalBitcoin}\nHealth: ${initialHealth}`)
    }

}
// solve("potion 30")
// solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")