//leetcode - 189. Rotate Array
//Brute force approach
var rotate = function(nums, k) {
    for(let i=0; i < k; i++){
        nums.unshift(nums.pop());               //removes from last and add it as first
    }
    return nums;
};

let nums = [1,2,3,4,5,6,7], k = 3;
console.log(rotate(nums,k))


//reversal method 
function rightRotate(nums,k){
    //helper function
    function reverse(arr, start, end) {
        while (start < end) {

            let temp = arr[start];                  //swapping
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
            
        }
      }
    
      k %= nums.length;                                     // If rotation is greater than size of array
    
      reverse(nums, 0, (nums.length - 1));                  //reverse entire array - [7,6,5,4,3,2,1]
      reverse(nums, 0, (k - 1));                            //reverse first k elements - [5,6,7,4,3,2,1]
      reverse(nums, k, (nums.length - 1));                  //reverse k to last element - [5,6,7,1,2,3,4]
    
      return nums;
}

console.log(rightRotate([1,2,3,4,5,6,7],3));