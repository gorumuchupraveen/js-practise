// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");

let date = new Date();
let hours = date.getHours();
let min = date.getMinutes();
let seconds = date.getSeconds();
let day = date.getDay();

let daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "THrusday",
  "Friday",
  "Saturday",
  "Sunday"
];
console.log('Today is' + ' ' + daylist[day])

console.log(hours + ":" + min + ":" + seconds );
