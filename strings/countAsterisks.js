//Leetcode - 2315. Count Asterisks
var countAsterisks = function(s) {
    let count = 0;
    let flag = true;
    for(let ch of s){
        if(flag && ch === '*'){
            count+=1;
        }
        if(ch === '|'){
            flag = !flag;
        }
    }
    return count;
};

let s = "l|*e*et|c**o|*de|";
console.log(countAsterisks(s));