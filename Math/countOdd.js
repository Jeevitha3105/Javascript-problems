//1523. Count Odd Numbers in an Interval Range

var countOdds = function(low, high) {
    let count = 0;
    for(let i = low; i <= high; i++){
        if(i % 2 !== 0){
            count++;
        }
    }
    return count;
};

let low = 3, high = 7;
console.log(countOdds(low,high));