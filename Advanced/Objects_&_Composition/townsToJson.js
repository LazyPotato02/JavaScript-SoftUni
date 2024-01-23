function townsToJson(input) {
    let towns = [];

    let regex = new RegExp(/\s*\|\s*/);
    for (let line of input.splice(1)) {
        let tokens = line.split(regex).filter(Boolean);
        towns.push({
            Town: tokens[0],
            Latitude: Number(tokens[1]).toFixed(2),
            Longitude: Number(tokens[2]).toFixed(2)
        });
    }

    return JSON.stringify(towns);

}


townsToJson(['| Town | Latitude | Longitude |',

    '| Veliko Turnovo | 43.0757 | 25.6172 |',

    '| Monatevideo | 34.50 | 56.11 |'] )