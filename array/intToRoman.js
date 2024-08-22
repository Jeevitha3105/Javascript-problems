//leetcode - 12. Integer to Roman

var intToRoman = function(num) {
    let symbol = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let roman = '';

    for(let i = 0; num > 0; ++i){
        while(num >= value[i]){
            roman += symbol[i];
            num -= value[i];
        }
    }
    return roman;
};

let num = 3749;
console.log(intToRoman(num));