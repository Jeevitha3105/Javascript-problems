function convertFive(num) {
    // code here
    let str = num.toString();
    let charArr = str.split('');
    
    for(let i=0; i < charArr.length; i++){
        if(charArr[i] == '0'){
            charArr[i] = '5';
        }
    }

    let returnStr = charArr.join('')
    return Number(returnStr);
}

console.log(convertFive(5759));