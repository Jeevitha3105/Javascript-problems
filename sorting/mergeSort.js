//Leetcode - 912. Sort an Array

var sortArray = function(nums) {

    // Base case: an array of zero or one elements is already sorted
    if(nums.length <= 1){
        return nums;
    }

     // Divide: find the middle index and split the array
    let mid = Math.floor(nums.length / 2);
    let left = nums.slice(0,mid);
    let right = nums.slice(mid);

     // Recursively sort both halves
    left = sortArray(left);
    right = sortArray(right);

     // Merge the sorted halves and return the result
    return merge(left,right);

};

function merge(left,right){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge until one of the subarrays is exhausted
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

     // Concatenate the remaining elements (if any)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

let nums = [5,2,3,1];
console.log(sortArray(nums));