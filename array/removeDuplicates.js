//leetcode - 80. Remove Duplicates from Sorted Array II

var removeDuplicates = function(nums) {
    let j = 0;
    if(nums.length <= 2) {
        return nums.length;
    }

    for(let i=0; i<nums.length; i++){
        if(nums[i] !== nums[i+2]){
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
};

console.log(removeDuplicates([1,1,1,3,2,2]));