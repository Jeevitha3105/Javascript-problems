//Leetcode - 290. Word Pattern
var wordPattern = function(pattern, s) {
    let words = s.split(" "); // Split the string s into an array of words
    let map = new Map(); // Create a Map to store mappings between pattern characters and words

    // Check if the number of characters in pattern matches the number of words in s
    if (pattern.length !== words.length) {
        return false; // If lengths do not match, return false
    }

    // Iterate through each character in pattern
    for (let i = 0; i < pattern.length; i++) {
        // If the map already has the current pattern character
        if (map.has(pattern[i])) {
            // Check if the mapped word for pattern[i] is different from current word
            if (map.get(pattern[i]) !== words[i]) {
                return false; // If different, return false
            }
        } else {
            // Check if the current word is already mapped to another pattern character
            for (const value of map.values()) {
                if (value === words[i]) {
                    return false; // If mapped to another pattern character, return false
                }
            }
            // Create a new mapping: pattern[i] -> words[i]
            map.set(pattern[i], words[i]);
        }
    }
    
    return true; // If all conditions are satisfied, return true
};

let pattern = "abba", s = "dog cat cat dog";
console.log(wordPattern(pattern, s));