//Leetcode - 283. Move Zeroes
var moveZeroes = function(nums) {
    let i = 0;
    for(let j=0; j<nums.length; j++){
        if(nums[j] !== 0){
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
        }
    }
    return nums;
};

let nums = [0,1,0,3,12];
console.log(moveZeroes(nums));