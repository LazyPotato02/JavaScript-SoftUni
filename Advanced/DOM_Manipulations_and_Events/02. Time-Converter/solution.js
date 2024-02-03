function attachEventsListeners() {

    let daysInp = document.getElementById('days')
    let hoursInp = document.getElementById('hours')
    let minutesInp = document.getElementById('minutes')
    let secondsInp = document.getElementById('seconds')


    let convertFromDays = document.getElementById('daysBtn')
    let convertFromHours = document.getElementById('hoursBtn')
    let convertFromMinutes = document.getElementById('minutesBtn')
    let convertFromSeconds = document.getElementById('secondsBtn')

    convertFromDays.addEventListener('click', convertFromDaysFunc)
    convertFromHours.addEventListener('click', convertFromHoursFunc)
    convertFromMinutes.addEventListener('click', convertFromMinutesFunc)
    convertFromSeconds.addEventListener('click', convertFromSecondsFunc)


    function convertFromDaysFunc() {
        let inputDays = daysInp.value
        let hours = 24 * inputDays
        let minutes = hours * 60
        let seconds = minutes * 60
        hoursInp.value = hours
        minutesInp.value = minutes
        secondsInp.value = seconds
    }

    function convertFromHoursFunc() {
        let inputHours = hoursInp.value
        let days = inputHours / 24
        let minutes = inputHours * 60
        let seconds = minutes * 60
        daysInp.value = days
        minutesInp.value = minutes
        secondsInp.value = seconds
    }

    function convertFromMinutesFunc() {
        let inputMinutes = minutesInp.value
        let hours = inputMinutes / 60
        let days = hours / 24
        let seconds = inputMinutes * 60
        daysInp.value = days
        hoursInp.value = hours
        secondsInp.value = seconds
    }

    function convertFromSecondsFunc() {
        let inputSeconds = secondsInp.value
        let minutes = inputSeconds / 60
        let hours = minutes / 60
        let days = hours / 24
        daysInp.value = days
        hoursInp.value = hours
        minutesInp.value = minutes
    }

}