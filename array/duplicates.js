//GFG - Array Duplicates

function duplicates(a, n) {
    let occurences = new Map();
    let result = [];
    for(let num of a){
        occurences.set(num , (occurences.get(num) || 0) + 1);
    }

    for(let [key,value] of occurences.entries()){
        if(value > 1){
            result.push(key);
        }
    }

    result.sort((a,b) => a - b);

    if(result.length === 0){
        return [-1];
    }
    return result;
}

let n = 4, arr = [0,3,1,2,2,3,5,5,5];
console.log(duplicates(arr,n))