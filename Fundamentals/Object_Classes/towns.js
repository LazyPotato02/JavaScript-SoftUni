function towns(array){
    for (let val of array){
        let town = { town: '',latitude: '', longitude:''}
        let vals = val.split(" | ")
        town.town = vals[0]
        town.latitude = vals[1]
        town.longitude = vals[2]
        console.log(town)
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)