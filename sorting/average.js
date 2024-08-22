//leetcode - 3194. Minimum Average of Smallest and Largest Elements
var minimumAverage = function(nums) {
    let averages = [];

    nums.sort((a,b) => a - b);
    console.log(nums);

    let start = 0;
    let end = nums.length - 1;
    while(start < end){
        let min = nums[start];
        let max = nums[end];
        let avg = (min + max) / 2;
        averages.push(avg);
        start++;
        end--;
    }

    averages.sort((a,b) => a - b);
    return averages[0];
};

let nums = [7,8,3,4,15,13,4,1];
console.log(minimumAverage(nums));