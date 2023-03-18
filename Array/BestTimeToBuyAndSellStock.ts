/**
 * Best Time to Buy and Sell Stock
 * leetcode | 121
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and
 * choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * @example 1
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices: number[]): number {
  let base = Infinity; //max value
  let highProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] <= base) {
      base = prices[i];
    } else if (prices[i] - base > highProfit) {
      highProfit = prices[i] - base;
    }
  }

  return highProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
console.log(maxProfit([3, 2, 6, 5, 0, 3]));
