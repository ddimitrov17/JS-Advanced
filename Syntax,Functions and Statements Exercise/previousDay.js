function previousDay(year, month, day) {
    let input = new Date(year, month - 1, day);
    let previousDay = new Date(input.getTime() - 24 * 60 * 60 * 1000);
    let prevYear = previousDay.getFullYear();
    let prevMonth = previousDay.getMonth() + 1; 
    let prevDayOfMonth = previousDay.getDate();
    console.log(`${prevYear}-${prevMonth}-${prevDayOfMonth}`);
}

previousDay(2016, 9, 30)