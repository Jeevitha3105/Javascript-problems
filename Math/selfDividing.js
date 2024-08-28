//Leetcode - 728. Self Dividing Numbers
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = [];
    
    for (let num = left; num <= right; num++) {
        if (isSelfDividing(num)) {
            result.push(num);
        }
    }
    
    return result;
};

function isSelfDividing(num) {
    let originalNum = num;
    while (num > 0) {
        let digit = num % 10;
        if (digit === 0 || originalNum % digit !== 0) {
            return false;
        }
        num = Math.floor(num / 10);
    }
    return true;
}

let left = 1, right = 22;
console.log(selfDividingNumbers(left,right));