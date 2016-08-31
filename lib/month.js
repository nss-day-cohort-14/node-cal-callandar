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


const monthHasXDays = (month, year) => {
  //01 = Jan - 12 = Dec
  let daysInMonth = 0;
  switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
      daysInMonth = 31;
      break;
    case 4: case 6: case 9: case 11:
      daysInMonth = 30;
      break;
    case 2:
      daysInMonth = leapYearParser(28, year);
      break;
  }
  return daysInMonth;
}

module.exports = {leapYear, leapYearParser, monthHasXDays}
