function leftRotate(arr, d) {
    function reverse(arr,start,end){
        while(start < end){
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    
    reverse(arr, d, (arr.length - 1));
    reverse(arr, 0, (d - 1));
    reverse(arr, 0, (arr.length - 1));

    return arr;
}

let arr = [-1, -2, -3, 4, 5, 6, 7], d = 2;
console.log(leftRotate(arr,d));