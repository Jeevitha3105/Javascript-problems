//Leetcode - 33. Search in Rotated Sorted Array
var search = function(nums, target) {
    let result = -1;
    for(let i=0; i<nums.length; i++){
        if(nums[i] == target){
            result = i;
        }
    }
    return result;
};

let nums = [4,5,6,7,0,1,2], target = 0;
console.log(search(nums,target));