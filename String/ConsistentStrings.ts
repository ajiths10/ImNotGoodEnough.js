/** Count the Number of Consistent Strings
 * leetcode | 1684
 * You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent
 * if all characters in the string appear in the string allowed.
 * Return the number of consistent strings in the array words.
 *
 * @example 1
 * Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
 * Output: 2
 * Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
 *
 * @example 2
 * Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
 * Output: 7
 *
 * @example 3
 * Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
 * Output: 4
 */

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = (allowed: string, words: string[]): number => {
  let allowedArray = allowed.split("");
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i].split("");
    let flag = true;
    for (let j = 0; j < word.length; j++) {
      if (!allowedArray.includes(word[j])) {
        flag = false;
        break;
      }
    }
    if (flag) count += 1;
  }

  return count;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
console.log(
  countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
);
console.log(
  countConsistentStrings("cad", [
    "cc",
    "acd",
    "b",
    "ba",
    "bac",
    "bad",
    "ac",
    "d",
  ])
);
