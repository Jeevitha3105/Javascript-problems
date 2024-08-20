//leetcode - 58. Length of Last Word

var lengthOfLastWord = function(s) {

    // split without using builtin
    let result = [];                            //array to store splitted words
    let temp = '';                              //to hold words

    for(let i=0; i<s.length; i++){              
        if(s[i] === ' '){                       //if it is reach the space
            if(temp){                           // If temp is not empty, push it to result
                result.push(temp);
                temp = '';                      //reset for store next word
            }
        }else{
            temp += s[i];                       // Append character to temp
        }
    }

    if(temp){                                   // If there is a remaining word after the loop
        result.push(temp);
    }

    return result[result.length-1].length;       //length of last word
};


let s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s));



// ---------using builtin function----------------------//
// function lengthOfLastWord(s){
//     s = s.trim();
//     let words = s.split(' ');
//     return words[words.length-1].length;
// }