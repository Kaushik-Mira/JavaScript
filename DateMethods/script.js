//TODO: 1. Creating a Date Object
let date = new Date(); // Current date and time
let date1 = new Date(milliseconds); // Date from milliseconds (since Jan 1, 1970)
let date2 = new Date(dateString); // Date from a string
let date3 = new Date(year, month, day, hours, minutes, seconds, milliseconds); // Date from individual values

//TODO: 2. Date Get Methods
//? getDate(): Returns the day of the month (1-31).
let day = date.getDate();

//? getDay(): Returns the day of the week (0-6, where 0 is Sunday).
let weekday = date.getDay();

//? getFullYear(): Returns the full year (e.g., 2024).
let year = date.getFullYear();

//? getMonth(): Returns the month (0-11, where 0 is January).
let month = date.getMonth();

//? getHours(): Returns the hour (0-23).
let hours = date.getHours();

//? getMinutes(): Returns the minutes (0-59).
let minutes = date.getMinutes();

//? getSeconds(): Returns the seconds (0-59).
let seconds = date.getSeconds();

//? getMilliseconds(): Returns the milliseconds (0-999).
let milliseconds = date.getMilliseconds();

//? getTime(): Returns the time in milliseconds since January 1, 1970.
let time = date.getTime();

//? getTimezoneOffset(): Returns the difference (in minutes) between the UTC time and local time.
let offset = date.getTimezoneOffset();

//TODO: 3. Date Set Methods
// These methods are used to set specific components of a date.
//? setDate(): Sets the day of the month (1-31).
date.setDate(15);

//? setFullYear(): Sets the full year (optionally, month and day can also be set).
date.setFullYear(2025);
date.setFullYear(2025, 5, 15); // Year, month (June), and day

//? setMonth(): Sets the month (0-11).
date.setMonth(5); // June

//? setHours(): Sets the hour (0-23).
date.setHours(10);

//? setMinutes(): Sets the minutes (0-59).
date.setMinutes(45);

//? setSeconds(): Sets the seconds (0-59).
date.setSeconds(30);

//? setMilliseconds(): Sets the milliseconds (0-999).
date.setMilliseconds(500);

//? setTime(): Sets the date and time based on the number of milliseconds since January 1, 1970.
date.setTime(1625225463000); // Sets the time in milliseconds

//TODO: 4. Date String Methods
// These methods convert a date into a readable string format.
//? toDateString(): Returns the date portion of a Date object as a string (e.g., "Mon Sep 29 2024").
let dateString = date.toDateString();

//? toTimeString(): Returns the time portion of a Date object as a string.
let timeString = date.toTimeString();

//? toISOString(): Returns the date as a string in the ISO 8601 format (e.g., "2024-09-29T13:45:30.000Z").
let isoString = date.toISOString();

//? toLocaleDateString(): Returns the date portion formatted according to local conventions.
let localDateString = date.toLocaleDateString();

//? toLocaleTimeString(): Returns the time portion formatted according to local conventions.
let localTimeString = date.toLocaleTimeString();

//? toLocaleString(): Returns the date and time formatted according to local conventions.
let localString = date.toLocaleString();

//TODO: 5. Other Useful Date Methods
//? now(): Returns the current time in milliseconds since January 1, 1970.
let currentTime = Date.now();

//? parse(): Parses a date string and returns the number of milliseconds since January 1, 1970.
let milliseconds1 = Date.parse("2024-09-29T13:45:30Z");

//? UTC(): Returns the time value in milliseconds for a specified date in UTC.
let utcTime = Date.UTC(2024, 8, 29); // Sept 29, 2024 in UTC

//FIXME: Example
let now = new Date(); // Current date and time
console.log(now.toDateString()); // Prints the current date in a readable format
console.log(now.getFullYear()); // Prints the current year

now.setFullYear(2025); // Changes the year to 2025
console.log(now.getFullYear()); // Prints 2025
