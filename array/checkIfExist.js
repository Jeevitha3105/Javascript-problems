//Leetcode - 1346. Check If N and Its Double Exist

var checkIfExist = function(arr) {
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i !== j && arr[i] == 2 * arr[j]){
                return true;
            }
        }
    }
    return false;
};


let arr = [10,2,5,3];
console.log(checkIfExist(arr));