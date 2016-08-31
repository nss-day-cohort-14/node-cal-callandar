"use strict";

const modifiedMonth = (month) => {
  month = Number(month)
  month = (month < 3 ) ? month+12 : month
  return month
}

const modifiedYear = (year, month) => {
  year = Number(year)
  year = (month < 3 ) ? year-1 : year
  return year
}


/* returns 0-6 where 0=sunday, 1=monday, etc....*/
const getDayOfWeek = (month, day, year) => {
    month = modifiedMonth(month)
    year = modifiedYear(year, month)
    var h = (day + parseInt(((month + 1) * 26) / 10) + year + parseInt(year / 4) + 6 * parseInt(year / 100) + parseInt(year / 400) - 1) % 7;
    return h;
}



module.exports = {getDayOfWeek, modifiedMonth, modifiedYear}
