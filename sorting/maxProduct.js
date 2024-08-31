//Leetcode - 1913. Maximum Product Difference Between Two Pairs

var maxProductDifference = function(nums) {
    nums.sort((a,b) => (a - b));
    let w = nums[0];
    let x = nums[1];
    let y = nums[nums.length - 1];
    let z = nums[nums.length - 2];

    return (y * z) - (w * x);
};

let nums = [5,6,2,7,4];
console.log(maxProductDifference(nums));