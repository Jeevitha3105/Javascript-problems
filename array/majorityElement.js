// leetcode - 169. Majority Element

var majorityElement = function(nums) {
    let countMap = new Map();
    for(let num of nums){
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    let maxCount = 0;
    let majorityElement = null;

    for(let [key,value] of countMap.entries()){
        if(value > maxCount){
            maxCount = value;
            majorityElement = key;
        }
    }
    return maxCount > nums.length / 2 ? majorityElement : null; 
};

let nums = [2,2,1,1,1,2,2];
console.log(majorityElement(nums));
