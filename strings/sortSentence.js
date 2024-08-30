//Leetcode - 1859. Sorting the Sentence

var sortSentence = function(s) {
    let arr = s.split(" ");
    let result = [];
    for(let i=0; i<arr.length; i++){
        let index = arr[i] [arr[i].length-1];
        result[index - 1] = arr[i].substring(0,arr[i].length-1);
    }
    return result.join(" ");
};

let s = "is2 sentence4 This1 a3";
console.log(sortSentence(s));