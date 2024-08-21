//leetcode - 121. Best Time to Buy and Sell Stock

var maxProfit = function(prices) {
    let min = Number.MAX_VALUE;
    let max = 0;
    for(let i=0; i<prices.length; i++){
        if(prices[i] < min){
            min = prices[i];                                
        }else{
            let profit = prices[i] - min;
            if(profit > max){
                max = profit;
            }
        }
    }
    return max;
};

console.log(maxProfit([7,1,5,3,6,4]));