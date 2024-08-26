function removeChars(s1, s2){
    let removeSet = new Set(s2);
    let result = '';
    
    for (let i = 0; i < s1.length; i++) {
        if (!removeSet.has(s1[i])) {
            result += s1[i];
        }
    }
    
    return result;
}

let s1 = "computer";
let s2 = "cat";

console.log(removeChars(s1,s2));