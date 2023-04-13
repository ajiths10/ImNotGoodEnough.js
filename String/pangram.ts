/**
 * Check if the Sentence Is Pangram
 * Leetcode | 1832
 * A pangram is a sentence where every letter of the English alphabet appears at least once.
 * Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise
 * @example 1
 * Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
 * Output: true
 * Explanation: sentence contains at least one of every letter of the English alphabet.
 * @example 2
 * Input: sentence = "leetcode"
 * Output: false
 */

/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = (sentence: string) => {
  let str = "abcdefghijklmnopqrstuvwxyz".split("");
  let modifiedSented = sentence.toLowerCase().split("");

  for (let i = 0; i < str.length; i++) {
    if (!modifiedSented.includes(str[i])) {
      return false;
    }
  }
  return true;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
console.log(checkIfPangram("leetcode"));
