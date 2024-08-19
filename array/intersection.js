//leetcode - 350. Intersection of Two Arrays II

var intersect = function(nums1, nums2) {
    let result = [];
    let countMap = new Map();               //hashmap to store no of occurences
    for(let num of nums1){
        countMap.set(num, (countMap.get(num) || 0) + 1);            //count
    }
    for(let num of nums2){
        if(countMap.get(num) > 0){
            result.push(num);
            countMap.set(num,(countMap.get(num) || 0) - 1);         //decrement to avoid duplicates
        }
    }
    return result;
};

let nums1 = [2,2];
let nums2 = [1,2,2,1];
console.log(intersect(nums1,nums2));