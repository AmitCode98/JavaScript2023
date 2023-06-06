//Date Object in javaScrit

//JavaScript provides several predefined methods for working with dates in the Date object. 

var date = new Date();

console.log(date.getFullYear()); // Current year
console.log(date.getMonth()); // Current month (0-11)
console.log(date.getDate()); // Current day of the month (1-31)
console.log(date.getDay()); // Current day of the week (0-6)
console.log(date.getHours()); // Current hour (0-23)
console.log(date.getMinutes()); // Current minutes (0-59)
console.log(date.getSeconds()); // Current seconds (0-59)
console.log(date.getMilliseconds()); // Current milliseconds (0-999)
console.log(date.getTime()); // Number of milliseconds since January 1, 1970

date.setFullYear(2022); // Set year to 2022
date.setMonth(6); // Set month to July (0-11)
date.setDate(15); // Set day of the month to 15
date.setHours(12); // Set hour to 12
date.setMinutes(30); // Set minutes to 30
date.setSeconds(45); // Set seconds to 45
date.setMilliseconds(500); // Set milliseconds to 500

console.log(date.toDateString()); // Convert date portion to a readable string
console.log(date.toTimeString()); // Convert time portion to a readable string
console.log(date.toLocaleDateString()); // Localized date string
console.log(date.toLocaleTimeString()); // Localized time string
console.log(date.toISOString()); // ISO format string

console.log(document.documentURI);
console.log(document.width)