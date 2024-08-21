//leetcode - 122. Best Time to Buy and Sell Stock II

var maxProfit = function(prices) {              // greedy approach-  Once a decision is made, it's not reconsidered. Greedy algorithms do not backtrack or revise their decisions.
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i++){             //starts with 2nd element (because we need at least two days to form a transaction)
        if(prices[i] > prices[i - 1]){                  //For each pair of consecutive days (prices[i-1] and prices[i]), if prices[i] is greater than prices[i-1], then there's a potential profit to be made by buying on day i-1 and selling on day i
            let profit = prices[i] - prices[i-1];       
            maxProfit += profit;                        //accumulate the profit
        }
    }
    return maxProfit;
};

let prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));