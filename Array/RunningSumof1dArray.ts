/**
 * Running Sum of 1d Array
 * leetcode | 1480
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 * @example 1
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums: number[]): number[] {
  let buscat = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    buscat.push(sum);
  }
  return buscat;
};

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));
