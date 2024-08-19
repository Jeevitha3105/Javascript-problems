//GFG - Array Leaders
function leaders(n, arr) {
    let result = [];
    let maxRight = arr[n-1];
    result.push(maxRight);

    for(let i=n-2; i>=0; i--){
        if(arr[i] >= maxRight){
            maxRight = arr[i];
            result.push(maxRight);
        }
    }
    return result.reverse();
}

let n = 6, arr = [16,17,4,3,5,2];
console.log(leaders(n,arr));