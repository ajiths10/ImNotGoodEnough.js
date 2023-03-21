/**
 * Reverse Words in a String
 * leetcode 151
 * @example 1
 * Input: s = "the sky is blue"
 * Output: "blue is sky the"
 * @example 2
 * Input: s = "  hello world  "
 * Output: "world hello"
 * Explanation: Your reversed string should not contain leading or trailing spaces.
 */

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s: string): string => {
  return s
    .split(" ")
    .filter((t) => t)
    .reverse()
    .join(" ");
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
