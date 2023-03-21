/**
 * Valid Palindrome
 * leetcode 125
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and
 * removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * @example 1
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s: string): boolean => {
  const str = s?.toLowerCase().match(/[a-z0-9]/g);

  return str?.join("") === str?.reverse().join("");
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("0P"));
