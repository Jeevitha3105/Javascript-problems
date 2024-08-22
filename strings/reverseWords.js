//leetcode - 151. Reverse Words in a String

var reverseWords = function(s) {
    let words = [];

    //split
    let temp = '';

    for(let i=0; i<s.length; i++){
        if(s[i] == " "){
            if(temp){
                words.push(temp);
                temp = '';          //reset
            }
        }
        else{
            temp += s[i];
        }
    }

    if(temp){
        words.push(temp);
    }

    //reverse
    let start = 0;
    let end = words.length - 1;
    while(start < end){
        let temp = words[start];
        words[start] = words[end];
        words[end] = temp;
        start++;
        end--;
    }

    return words.join(' ');
};

let  s = "the sky is blue";
console.log(reverseWords(s));