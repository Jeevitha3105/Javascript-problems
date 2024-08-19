function sorting(arr){
    for(let i=0; i<arr.length - 1; i++){
        for(let j=0; j<arr.length -1 -i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(sorting([5, 3, 1, 6, 9]));