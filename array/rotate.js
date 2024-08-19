function rotate(arr) {
    // code here
    let lastEl = arr[arr.length - 1];

    for(let i = arr.length -1; i > 0; i--){
        arr[i] = arr[i - 1];
    }
    arr[0] = lastEl;
    return arr;
}

console.log(rotate([1,2,3,4,5]));