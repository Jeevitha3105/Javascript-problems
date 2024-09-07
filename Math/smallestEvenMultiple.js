//Leetcode - 2413. Smallest Even Multiple

var smallestEvenMultiple = function(n) {
    if(n % 2 === 0){
        return n;
    }else{
        return n * 2;
    }
};

let n = 6;
console.log(smallestEvenMultiple(n));