function isPerfect(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        if(arr[left] !== arr[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

let arr = [1,2,3,2,1];
let arr1 = [1, 2, 3, 4, 5];

console.log(isPerfect(arr));
console.log(isPerfect(arr1));