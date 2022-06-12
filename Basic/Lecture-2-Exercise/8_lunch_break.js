function lunch_break(input) {
    let serial_name = input[0];
    let episode_len = Number(input[1]);
    let lunch_break = Number(input[2]);

    let time_for_meal = lunch_break / 8;
    let time_for_rest = lunch_break / 4;
    let left_time = lunch_break - time_for_meal - time_for_rest;


    if (left_time >= episode_len) {
        console.log(`You have enough time to watch ${serial_name} and left with ${Math.ceil(left_time - episode_len)} minutes free time.`);
    } else {
        console.log(`You don\'t have enough time to watch ${serial_name}, you need ${Math.ceil(episode_len - left_time)} more minutes.`)
    }
}

lunch_break(["Teen Wolf",
"48",
"60"])