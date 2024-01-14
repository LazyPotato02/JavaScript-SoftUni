function previousDay(year, month, day) {
    const currentDate = new Date(year, month - 1, day);

    const previousDayTimestamp = currentDate.getTime() - 24 * 60 * 60 * 1000;

    const previousDayDate = new Date(previousDayTimestamp);

    const previousYear = previousDayDate.getFullYear();
    const previousMonth = previousDayDate.getMonth() + 1;
    const previousDay = previousDayDate.getDate();


    const formattedResult = `${previousYear}-${String(previousMonth)}-${String(previousDay)}`;

    console.log(formattedResult)
}

previousDay(2016, 9, 1 )
// previousDay(2015, 5, 10 )
