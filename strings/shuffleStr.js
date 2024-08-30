var restoreString = function(s, indices) {

    let resultArr = [];
    for(let i=0; i < indices.length; i++){
        resultArr[indices[i]] = s.charAt(i);
    }
    return resultArr.join("");
};

let s = "codeleet", indices = [4,5,6,7,0,2,1,3];
console.log(restoreString(s, indices));