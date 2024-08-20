// GFG - array search
function search(arr, x) {
    // write your code here
    for(let i=0; i<arr.length; i++){
        if(arr[i] === x){
            return i;
        }
    }
    return -1;
}

let arr = [1, 2, 3, 4], x = 3;
console.log(search(arr,x));