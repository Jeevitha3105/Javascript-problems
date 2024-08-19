function minAnd2ndMin(arr) {
    // code here
    if (arr.length < 2) {
        return -1;
    }

    let min = Infinity;
    let secondMin = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            secondMin = min;
            min = arr[i];
        } else if (arr[i] > min && arr[i] < secondMin) {
            secondMin = arr[i];
        }
    }

    if (secondMin === Infinity) {
        return -1;
    }

    return { min, secondMin };
}

let arr = [2, 4, 3, 5, 6];
let arr1 = [-1,-1,-1];
console.log(minAnd2ndMin(arr));
console.log(minAnd2ndMin(arr1));