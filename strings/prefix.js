//Leetcode - 2185. Counting Words With a Given Prefix

var prefixCount = function(words, pref) {
    let count = 0;
    for(let i=0; i<words.length; i++){
        if(words[i].startsWith(pref)){
            count += 1;
        }
    }
    return count;
};

let words = ["pay","attention","practice","attend"], pref = "at";

console.log(prefixCount(words,pref));