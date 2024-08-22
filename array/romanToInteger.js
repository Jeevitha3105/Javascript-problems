//leetcode - 13. Roman to Integer;
var romanToInt = function(s) {
    let map = new Map();
    map.set('I' , 1);
    map.set('V' , 5);
    map.set('X' , 10);
    map.set('L' , 50);
    map.set('C' , 100);
    map.set('D' , 500);
    map.set('M' , 1000);

    let result = 0;

    for(let i = 0; i<s.length; i++){                                                                    
        let currentVal = map.get(s[i]);                                                 
        let nextVal = map.get(s[i+1]);
        if(nextVal && currentVal < nextVal){
            result -= map.get(s[i]);
        }else{
            result += map.get(s[i]);
        }
    }
    return result;
};

let s = "III";
console.log(romanToInt(s));

// 1 - I
// 2 - II
// 3 - III
// 4 - IV    ----> 1 - 5 = 4
// 5 - V
//6 - VI     ----> 5 + 1 = 6