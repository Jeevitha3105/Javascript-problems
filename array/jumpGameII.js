//leetcode - 45. Jump Game II

var jump = function(nums) {
    
    let n = nums.length;
    let steps = 0;
    let maxReach = 0;
    let end = 0;

    for(let i=0; i<n -1; i++){
        maxReach = Math.max(maxReach, i + nums[i]);

        if(i === end){
            steps++;
            end = maxReach;

            if(end >= n - 1){
                return steps;
            }
        }
    }
    return steps;

};

let nums = [3,2,1,0,4];
console.log(jump(nums));