//Leetcode - 451. Sort Characters By Frequency

var frequencySort = function(s) {
    let countoccurances = new Map();

    for(let ch of s){
        if(countoccurances.has(ch)){
            countoccurances.set(ch, countoccurances.get(ch) + 1);
        }else{
            countoccurances.set(ch, 1);
        }
    }

    let result = "";
    let sorted = new Map([...countoccurances].sort((a,b) => b[1] - a[1]));    //[[key,value],[key,value],[key,value]].sort((a,b) => b[1] - a[1]) //a[0] = key(char) , a[1] = value(count)

    for(let [key,value] of sorted){
        result = result + key.padStart(value, key);                 //to repeat char
    }

    return result;
};

let s = "tree";
console.log(frequencySort(s));