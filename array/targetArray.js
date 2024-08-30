var createTargetArray = function(nums, index) {

    if(nums.length !== index.length){
        return false;
    }

    let target = [];
    for(let i = 0; i < nums.length; i++){

        target.splice(index[i], 0, nums[i])

    }
    return target;
};

let nums = [0, 1, 0];
let index = [0, 1, 0];
console.log(createTargetArray(nums, index));