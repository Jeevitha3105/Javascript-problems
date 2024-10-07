//Leetcode - 744. Find Smallest Letter Greater Than Target

var nextGreatestLetter = function(letters, target) {
    for(let i=0; i<letters.length; i++){
        if(letters[i] > target){
            return letters[i];
        }
    }
    return letters[0];
};


letters = ["c","f","j"], target = "a";
console.log(nextGreatestLetter(letters, target));