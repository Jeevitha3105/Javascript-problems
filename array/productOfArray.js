var productExceptSelf = function(nums) {
    let answers = [];
    //left product
    let leftProduct = 1;
    for(let i=0; i<nums.length; i++){
        answers[i] = leftProduct;
        leftProduct *= nums[i];
    }

    //right product
    let rightProduct = 1;
    for(let i=nums.length-1; i>=0; i--){
        answers[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    return answers;
};

let nums = [1,2,3,4];
// let nums = [-1,1,0,-3,3];
// let nums = [0,0]
console.log(productExceptSelf(nums));