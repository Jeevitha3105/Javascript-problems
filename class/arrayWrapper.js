//Leetcode - 2695. Array Wrapper

var ArrayWrapper = function(nums) {
    this.nums = nums
};


ArrayWrapper.prototype.valueOf = function() {
    if(this.nums.length === 0){
        return 0;
    }
    let sum = 0;
    for(let i of this.nums){
        sum += i;
    }
    return sum;
}

ArrayWrapper.prototype.toString = function() {
    return JSON.stringify(this.nums);
}

const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"
