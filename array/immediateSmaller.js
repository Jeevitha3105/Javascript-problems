function immediateSmaller(arr,n){
    let result = new Array(n);

    for(let i=0; i < n; i++){
        if(i+1 < n && arr[i+1] < arr[i]){
            result[i] = arr[i+1];
        }else{
            result[i] = -1;
        }
    }

    return result;
}

// let n = 5, arr = [4, 2, 1, 5, 3];
let n = 6, arr = [5, 6, 2, 3, 1, 7];
console.log(immediateSmaller(arr,n));