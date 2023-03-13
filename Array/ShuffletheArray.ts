/**
 * Shuffle the Array ##Leetcode 1470
 * Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
 * Return the array in the form [x1,y1,x2,y2,...,xn,yn].
 *
 * ## Example 1:
 * Input: nums = [2,5,1,3,4,7], n = 3
 * Output: [2,3,5,4,1,7]
 * Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
 */

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = (nums: number[], n: number) => {
  let newArr = [];
  let runner = 0;

  for (let i = 0; n < nums.length; i++) {
    newArr[runner] = nums[i];
    runner++;
    newArr[runner] = nums[n];
    n++;
    runner++;
  }

  return newArr;
};

console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
console.log(shuffle([1, 1, 2, 2], 2));
