//Leetcode - 1518. Water Bottles

var numWaterBottles = function(numBottles, numExchange) {
let canDrink = numBottles;

while(numBottles >= numExchange){
    
    canDrink += Math.floor(numBottles / numExchange);
    numBottles = Math.floor(numBottles / numExchange) + Math.floor(numBottles % numExchange);
}
return canDrink;

};

let numBottles = 9, numExchange = 3;
console.log(numWaterBottles(numBottles, numExchange));