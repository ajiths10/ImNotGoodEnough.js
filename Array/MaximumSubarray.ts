/**
 * Maximum Subarray
 * Leetcode 53
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 * @example 1
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums: number[]): number => {
  let larger = nums[0];

  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];
    if (nums[i] > larger) larger = nums[i];
  }

  return larger;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
