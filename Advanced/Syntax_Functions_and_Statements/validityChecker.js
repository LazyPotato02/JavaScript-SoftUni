

function checkDistancesValidity(x1, y1, x2, y2) {
    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }

    function isValidDistance(x1, y1, x2, y2) {
        const distanceToOrigin1 = calculateDistance(x1, y1, 0, 0);
        const distanceToOrigin2 = calculateDistance(x2, y2, 0, 0);
        const distanceBetweenPoints = calculateDistance(x1, y1, x2, y2);

        return Number.isInteger(distanceToOrigin1) &&
            Number.isInteger(distanceToOrigin2) &&
            Number.isInteger(distanceBetweenPoints);
    }


    if (isValidDistance(x1, y1, 0, 0)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (isValidDistance(x2, y2, 0, 0)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (isValidDistance(x1, y1, x2, y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

// checkDistancesValidity(3, 0, 0, 4)
checkDistancesValidity(2, 1, 1, 1 )