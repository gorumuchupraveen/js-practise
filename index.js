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
seconds = seconds <= 9 ? "0" + seconds : seconds;
console.log(seconds);

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

console.log(hours + ":" + min + ":" + seconds + " " + addZone);
