//JS to display the current day and time in Today is: Tuesday
//Current time is 10 PM:30:38
var today = new Date();
var day = today.getDay();
const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
console.log("Toady is: "+daylist[day])

let hour= today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
let prepand = (hour >= 12)?"PM":"AM";
hour = (hour >= 12)?hour -12: hour;
console.log("Current time is "+hour+" "+prepand+":"+minute+":"+second);