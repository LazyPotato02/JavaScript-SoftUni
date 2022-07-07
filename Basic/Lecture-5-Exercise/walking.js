function walking(input) {

    let command = input.shift();
    let target = 10000;
    let totalStepsWalked = 0;

    /////////////////////// WORKING /////////////////////////

    while (command !== `Going home`) {

        let inputSteps = Number(command);
        totalStepsWalked += inputSteps;

        if (totalStepsWalked >= target) {

            break;
        }

        command = input.shift();

    } // End of while 

    if (command === `Going home` || totalStepsWalked >= target) {

        let lastSteps = Number(input.shift(command));
        if (lastSteps >= 0) {
            totalStepsWalked += lastSteps;
        }
        if (totalStepsWalked >= target) {
            console.log("Goal reached! Good job!");

            console.log(`${totalStepsWalked - target} steps over the goal!`)

        }

        else {

            console.log(`${target - totalStepsWalked} more steps to reach goal.`);
        }

    }

}

walking(["1000",

"1500",

"2000",

"6500"])