//Leetcode - 1394. Find Lucky Integer in an Array

var findLucky = function(arr) {
    let map = new Map();
    let luckyNum = 0;

    for(let val of arr){
        map.set(val, (map.get(val) || 0) + 1)
    }

    for(let [key,value] of map){
        if(key == value && luckyNum < key){
            luckyNum = key;
        }
    }

    return luckyNum === 0 ? -1 : luckyNum;
};

let arr = [2,2,3,4];
console.log(findLucky(arr));