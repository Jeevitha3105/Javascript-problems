function thirdLargest(arr) {
    // your code here
    arr.sort((a,b)=>a-b);

    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }

    return arr[2];
}

let arr = [2, 4, 1, 3, 5]
console.log(thirdLargest(arr));