function solve(input) {
    let obj = {};
    let cardsMapper = {

        p: {
            "J": 11,
            "Q": 12,
            "K": 13,
            "A": 14,
        },

        t: {
            "S": 4,
            "H": 3,
            "D": 2,
            "C": 1,
        }

    }

    input.forEach(line => {

        let [player, cards] = line.split(": ");

        if (!obj[player]) {
            obj[player] = new Set(cards.split(", "));
        } else {
            cards.split(", ").forEach((card) => {
                obj[player].add(card);
            })
        }

    });

    Object.keys(obj).forEach(key => {

        console.log(`${key}: ${totalPower(obj[key])}`);

    });

    function totalPower(cardSet) {
        let totalSum = 0;

        cardSet.forEach((card) => {
            let tokens = card.split("");
            let color = tokens.pop();
            let value = tokens.join('');

            let p = 0;

            if (!cardsMapper.p[value]) {
                p = Number(value);
            } else {
                p = cardsMapper.p[value];
            }

            totalSum += p * (cardsMapper.t[color]);

        })
        return totalSum;
    }

}