//leetcode - 125. Valid Palindrome

var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let start = 0;
    let end = s.length-1;
    while(start < end){
        if(s[start] !== s[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
};

let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));