//Leetcode - 135.CANDY
var candy = function(ratings) {
    let arr = [];
    //minimum 1 candy for each child
    for(let i=0; i<ratings.length; i++){
        arr[i] = 1;
    }

    //left to right traversal
    for(let i=0; i<ratings.length; i++){
        if(ratings[i] > ratings[i - 1]){
            arr[i] = arr[i - 1] + 1;
        }
    }

    //right to left traversal
    for(let i = ratings.length-1; i>=0; i--){
        if(ratings[i] > ratings[i + 1]){
            if(arr[i] <= arr[i+1]){
                arr[i] = arr[i+1] + 1
            }
        }
    }

    //calculate
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    
    return sum;
};

let ratings = [1,0,2];
console.log(candy(ratings));