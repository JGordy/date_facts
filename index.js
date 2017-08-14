const moment = require("moment");
const chalk = require("chalk");

let now = moment();

console.log("It is " + chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")) );

console.log("It is the " + chalk.magenta(moment().format("DDDo")) + " day of the year.");

console.log("It is " + chalk.cyan(moment().hours() * 60 * 60 + moment().minutes() * 60 + moment().seconds()) + " seconds into the day.");

if (moment().isDST() == true) {
  console.log("It " + chalk.green("is ") + "during daylight savings time.");
} else {
  console.log("It" + chalk.green("is not ") + "during daylight savings time.");
}

if (moment().isLeapYear() == true) {
  console.log("It " + chalk.red("is ") + "a leap year");
} else {
  console.log("It " + chalk.red("is not ") + "a leap year.");
}
