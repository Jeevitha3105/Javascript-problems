//leetcode - 274. H-Index

var hIndex = function(citations) {
    citations.sort((a,b) => b - a);
    for(let i=0; i<citations.length; i++){
        if(citations[i] <= i){
            return i;
        }
    }
    return citations.length;
};

let citations = [3,0,6,1,5];

console.log(hIndex(citations));