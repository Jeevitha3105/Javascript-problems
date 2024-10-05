// Leetcode - 81. Search in Rotated Sorted Array II

var search = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        if(nums[i] == target){
            return true;
        }
    }
    return false;
};

let nums = [2,5,6,0,0,1,2], target = 0;
console.log(search(nums,target));