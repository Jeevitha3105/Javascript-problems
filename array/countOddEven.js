//GFG - count odd even

function countOddEven(arr) {
    // Your code here
    let odd = 0;
    let even = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            even++;
        }else{
            odd++;
        }
    }
    return [odd, even];
}

let arr = [1, 2, 3, 4, 5];
console.log(countOddEven(arr));