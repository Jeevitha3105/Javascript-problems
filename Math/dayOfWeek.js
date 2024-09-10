//Leetcode - 1185. Day of the Week

var dayOfTheWeek = function(day, month, year) {
    let days = ["Sunday", 'Monday', "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let str = '';
str += year + "-" + month + "-" + day
return days[new Date(str).getDay()]
};

let day = 31, month = 8, year = 2019;
console.log(dayOfTheWeek(day,month,year));