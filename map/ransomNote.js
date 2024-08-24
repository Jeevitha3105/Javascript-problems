//Leetcode - 383. Ransom Note

var canConstruct = function(ransomNote, magazine) {
     // Step 1: Count frequencies of each character in magazine
    let countChar = new Map();

    for(let char of magazine){
        if(countChar.has(char)){
            countChar.set(char, countChar.get(char) + 1);
        }else{
            countChar.set(char, 1);
        }
    }

    // Step 2: Check if ransomNote can be constructed
    for(let char of ransomNote){
        if(countChar.has(char) && countChar.get(char) > 0){
            countChar.set(char, countChar.get(char) - 1);
        }else{
            return false;           // If char not found or count is zero
        }
    }
    return true;                    // If all characters in ransomNote can be constructed
};

let ransomNote = "aa", magazine = "ab";
console.log(canConstruct(ransomNote, magazine));