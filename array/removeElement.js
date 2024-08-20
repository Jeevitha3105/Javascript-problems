//leetcode - 27. Remove Element
var removeElement = function(nums, val) {
    let index = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== val){
            nums[index++] = nums[i];
        }
    }
    return index;
};

let nums = [3,2,2,3], val = 3;
console.log(removeElement(nums,val))