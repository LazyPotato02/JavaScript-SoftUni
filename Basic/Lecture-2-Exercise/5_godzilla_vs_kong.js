function godzila_vs_kong(input){
    let budget = Number(input[0]);
    let people = Number(input[1]);
    let price_per_costume = Number(input[2]);

    let decoration = budget * 0.10;
    if (people >= 150){
        discount_for_costume = price_per_costume * 0.10;
        price_per_costume = price_per_costume - discount_for_costume;
    };
    costume_price = price_per_costume * people;
    final_price = (decoration + costume_price);
    if (final_price > budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${Math.abs(final_price - budget).toFixed(2)} leva more.`);
    }else{
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - final_price).toFixed(2)} leva left.`)
    }
}

godzila_vs_kong((["20000","120","55.5"]))
// godzila_vs_kong((["9587.88","222","55.68"]))