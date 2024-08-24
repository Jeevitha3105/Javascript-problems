var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;
    
    for(let num of nums){
        elementSum += num;
    }

    for(let num of nums){
        let digits = num.toString().split('');
        for(let digit of digits){
            digitSum += parseInt(digit);
        }
    }

    let diff = elementSum - digitSum;
    return diff;
};

let nums = [1,15,6,3];
console.log(differenceOfSum(nums));