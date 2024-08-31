//Leetcode - 1773. Count Items Matching a Rule

var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    let keyindex = 0;

    if(ruleKey === "color"){
        keyindex = 1;
    }
    if(ruleKey === "name"){
        keyindex = 2;
    }

    for(let i=0; i<items.length; i++){
        if(items[i][keyindex] === ruleValue){
            count++;
        }
    }

    return count;
};

let items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]]
let ruleKey = "color"
let ruleValue = "silver"

console.log(countMatches(items, ruleKey, ruleValue));