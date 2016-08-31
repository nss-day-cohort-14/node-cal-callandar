"use strict";


const leapYear = (year) => {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}


const leapYearParser = (baseDays, year) => {
  if (leapYear(year)) {
    baseDays++
  }
  return baseDays;
}


const monthHasXDays = (year, month) => {
  //01 = Jan - 12 = Dec
  let daysInMonth = 0;
  switch (month) {
    case 1, 3, 5, 7, 8, 10, 12:
      daysInMonth = 31;
    case 4, 6, 9, 11:
      daysInMonth = 30;
    case 2:
      daysInMonth = leapYearParser(28, year);
  }
  return days;
}

module.exports = {leapYear, leapYearParser, monthHasXDays}
