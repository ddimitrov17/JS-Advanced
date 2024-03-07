function daysInAMonth(month,year) {
    let lastDayOfMonth = new Date(year, month, 0);
    let numberOfDays = lastDayOfMonth.getDate();
    console.log(numberOfDays);  
}

daysInAMonth(1,2012)