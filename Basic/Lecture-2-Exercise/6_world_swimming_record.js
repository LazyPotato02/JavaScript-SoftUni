function record(input) {
    let record_in_sec = Number(input[0]);
    let distance_in_m = Number(input[1]);
    let time_for_1_m = Number(input[2]);

    let time = distance_in_m * time_for_1_m;
    let slow_time = Math.floor(distance_in_m / 15);
    time = time + (slow_time * 12.5);

    if (time < record_in_sec) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    } else { 
        let diff = time - record_in_sec
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}

record(["55555.67",
"3017",
"5.03"])