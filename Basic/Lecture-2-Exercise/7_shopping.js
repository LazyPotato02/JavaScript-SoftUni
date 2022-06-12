function shopping(input) {
    let budget = Number(input[0]);
    let video_count = Number(input[1]);
    let cpu_count = Number(input[2]);
    let ram_count = Number(input[3]);

    let video_price = 250 * video_count;
    let cpu_price = (video_price * 0.35) * cpu_count;
    let ram_price = (video_price * 0.10) * ram_count;

    let total_price = video_price + cpu_price + ram_price;
    if (video_count > cpu_count) {
        let discount = total_price * 0.15;
        total_price = total_price - discount;
    }
    let left_money = budget - total_price;
    if (total_price <= budget) {
        console.log(`You have ${left_money.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(left_money).toFixed(2)} leva more!`);
    }
}

shopping(["920.45",
"3",
"1",
"1"])