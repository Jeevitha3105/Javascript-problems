// Leetcode - 1108. Defanging an IP Address
var defangIPaddr = function(address) {
    let str = "";
    for(let i=0; i<address.length; i++){
        if(address[i] === '.'){
            str += '[.]'
        }else{
            str += address[i];
        }
    }
    return str;
};

let address = "255.100.50.0";
console.log(defangIPaddr(address))