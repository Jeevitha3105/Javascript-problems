// Leetcode - 561. Array Partition
var arrayPairSum = function(nums) {
    nums.sort((a,b) => a - b);
    let sum = 0;
    for(let i=0; i<nums.length; i+=2){
        sum += Math.min(nums[i], nums[i+1]);
    }
    return sum;
};

let nums = [1,4,3,2];
console.log(arrayPairSum(nums));