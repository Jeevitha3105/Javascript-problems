//Leetcode - 1189. Maximum Number of Balloons

var maxNumberOfBalloons = function(text) {
    const charCount = {b : 0, a : 0, l : 0, o : 0, n : 0};
    for(let char of text){
        if(char in charCount){
            charCount[char]++;
        }
    }
    charCount['l'] = Math.floor(charCount['l'] / 2);
    charCount['o'] = Math.floor(charCount['o'] / 2);
    return Math.min(charCount['b'],charCount['a'],charCount['l'],charCount['o'],charCount['n']);
};

let text = "loonbalxballpoon";
console.log(maxNumberOfBalloons(text));