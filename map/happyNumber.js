//Leetcode - 202. Happy Number;

var isHappy = function(n) {
    //helper function
    function newNumber(num){
        let sum = 0;
        while(num > 0){
            let digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10)
        }
        return sum;
    }

    let set = new Set();
    while(n !== 1 && !set.has(n)){
        set.add(n);
        n = newNumber(n)
    }

    return n === 1;
};

let n = 19;
console.log(isHappy(n));

