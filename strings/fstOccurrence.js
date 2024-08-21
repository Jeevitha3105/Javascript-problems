//leetcode - 28. Find the Index of the First Occurrence in a String
var strStr = function(haystack, needle) {
    if(needle === ""){
        return false;
    }
    for(let i=0; i < haystack.length; i++){
        if(haystack.startsWith(needle, i)){
            return i;
        }
    }
    return -1;
};

let haystack = "sadbutsad", needle = "sad";
console.log(strStr(haystack,needle));