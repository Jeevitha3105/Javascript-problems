//GFG - Check Equal Arrays
function check(arr1, arr2) {
    arr1.sort((a,b) =>  a - b);
    arr2.sort((a,b) =>  a - b);

    for(let i=0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        } 
    }
    return true;
}

let arr1 = [1, 2, 4, 5, 0], arr2 = [2, 4, 5, 0, 1];
// let arr1 = [2,2,3], arr2 = [1,2,3];
console.log(check(arr1,arr2));