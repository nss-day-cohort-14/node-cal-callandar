const {getDayOfWeek} = require('./zellers');
const {monthHasXDays} = require('./month');

// This is setting the spacing for the leading block TITLE of each month.
const monthTitle  = [
"    January    ",
"   February   ",
"     March     ",
"     April     ",
"      May      ",
"     June     ",
"     July     ",
"    August    ",
"   September   ",
"    October    ",
"   November   ",
"   December   "];

// This is setting the spacing for the leading block WEEK LINE of each month.
const weekLine = "Su Mo Tu We Th Fr Sa";


///////////////////////////////////////////////////////////////////
/////////////    THE MESSY CALENDAR PRINTING BIZ    ///////////////
///////////////////////////////////////////////////////////////////
let printLoop = (month, year) => {
  let startDay = getDayOfWeek(month, 1, year);  //startDay => number of empty spaces before it starts
  let daysInMonth = monthHasXDays(month, year);

  let calToPrint;                               //INITITATE CALENDAR
  linesInCal = 0;                               //INITITATE LINES IN CAL

  calToPrint += monthTitle[month - 1] + `\n`;   //Month Title
  calToPrint += weekLine + `\n`;                //Su Mo Tu We Th Fr Sa

  for (var i = 0; i < startDay; i++) {          //Prints approriate number of spaces
    calToPrint += "  "
  }


  for (var i = 1; i <= daysInMonth; i++) {
    if (i < 10) {                               //If the character is less than 10, an extra space will need to be printed to keep alignment.
      if ((i + startDay)%7 === 1) {             //If beginning of the line, print no leading spaces
        calToPrint += ` ${i}`
      } else {
        calToPrint += `  ${i}`
      }
    } else {
      if ((i + startDay)%7 === 1) {
        calToPrint += `${i}`
      } else {
        calToPrint += ` ${i}`
      }
    }

    if ((i + startDay)%7 === 0) {               //Break lines every 7 days
      calToPrint += `\n`
      lineCount ++;
    }


    while (lineCount < 6) {                     //Keeps calendar same height no matter how many "weeks" are in the month
      calToPrint += `\n`
      lineCount++;
    }
  }
}
