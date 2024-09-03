//Leetcode - 1748. Sum of Unique Elements

var sumOfUnique = function(nums) {
    let count = new Map();
    for(let num of nums){
        if(count.has(num)){
            count.set(num, count.get(num) + 1);
        }else{
            count.set(num, 1);
        }
    }

    let sum = 0;

    for(let [key,value] of count){
        if(value == 1){
            sum += key;
        }
    }

    return sum;
};

let nums = [1,2,3,4,5];
console.log(sumOfUnique(nums));