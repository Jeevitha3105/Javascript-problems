//Leetcode - 1512. Number of Good Pairs

var numIdenticalPairs = function(nums) {
    let occurences = new Map();
    let goodPairs = 0;
    for(let i=0; i<nums.length; i++){
        if(occurences.has(nums[i])){
            occurences.set(nums[i], occurences.get(nums[i]) + 1);
        }else{
            occurences.set(nums[i], 1)
        }
    }

    for(let [key,value] of occurences){
        goodPairs += value * (value - 1) / 2;
    }
    

    return goodPairs;
};

let nums = [1,2,3,1,1,3];
console.log(numIdenticalPairs(nums));