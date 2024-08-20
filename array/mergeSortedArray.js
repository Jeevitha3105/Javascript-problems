// leetcode - 88.Merge Sorted Array
var merge = function(nums1, m, nums2, n) {
    let j = 0;
    for(let i = nums1.length; i >= m; i--){
        if(nums1[i] === 0){
            nums1.splice(i,1);
            nums1.push(nums2[j]);
            j++;
        }
    }
    return nums1.sort((a,b) => a - b);
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
console.log(merge(nums1,m,nums2,n));