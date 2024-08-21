//leetcode - 55. Jump Game

var canJump = function(nums) {
    let max = 0;
    let i = 0;
    while(i < nums.length){
        max = Math.max(max , i + nums[i]);

        if(max >= nums.length-1){
            return true;
        }

        if(max === i){
            return false;
        }

        i++;
    }
    return false;
};

let nums = [2,3,1,1,4];
console.log(canJump(nums));