
var isPowerOfThree = function(n) {
    if(n <= 0){
        return false;
    }

    while(n % 3 === 0){                 //Continuously divides n by 3 as long as n is divisible by 3
        n /= 3;
    }
    return n === 1;
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(-1));
console.log(isPowerOfThree(243));