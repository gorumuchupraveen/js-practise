// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");

let date = new Date();
let hours = date.getHours();
let min = date.getMinutes();
let seconds = date.getSeconds();
let day = date.getDay();

let addZone = hours >= 12 ? "PM" : "AM";
hours = hours >=12 ? hours - 12 : hours;
seconds = seconds <= 9 ? "0" + seconds : seconds;
min = min <= 9 ? "0" + min : min;
hours = hours <= 9 ? "0" + hours : hours;
// console.log(seconds, 'Seconds');
// console.log(min, 'Minutes');

if (seconds >= date.getSeconds(9)) {
}

let daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
  "Sunday"
];
console.log("Today is" + " " + daylist[day]);

console.log('Current Time is', hours + ":" + min + ":" + seconds + " " + addZone);
