/**
 * Contains Duplicate
 * leetcode 217
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 * @example 1
 * Input: nums = [1,2,3,1]
 * Output: true
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums: number[]) => {
  let flag = false;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        flag = true;
        break;
      }
      if (flag) break;
    }
  }

  return flag;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate([]));
