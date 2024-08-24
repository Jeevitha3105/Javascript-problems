//Leetcode - 2540. Minimum Common Value

var getCommon = function(nums1, nums2) {
    let common = undefined;
    let i = 0;
    let j = 0;
    
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] === nums2[j]){
            common = nums1[i];
            break;
        }else if(nums1[i] < nums2[j]){
            i++;
        }else{
            j++;
        }
    }
    
    return common !== undefined ? common : -1;
};

let nums1 = [1,2,3], nums2 = [2,4];
console.log(getCommon(nums1,nums2));
