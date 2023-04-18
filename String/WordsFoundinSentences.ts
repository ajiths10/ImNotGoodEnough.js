/**
 * Maximum Number of Words Found in Sentences
 * Leetcode 2114
 * A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
 * You are given an array of strings sentences, where each sentences[i] represents a single sentence.
 * Return the maximum number of words that appear in a single sentence.
 *
 * @example 1
 * Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
 * Output: 6
 * Explanation:
 * - The first sentence, "alice and bob love leetcode", has 5 words in total.
 * - The second sentence, "i think so too", has 4 words in total.
 * - The third sentence, "this is great thanks very much", has 6 words in total.
 * Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.
 * @example 2
 * Input: sentences = ["please wait", "continue to fight", "continue to win"]
 * Output: 3
 */

/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = (sentences: string[]): number => {
  let count = 0;

  for (let i = 0; i < sentences.length; i++) {
    let temp_length = sentences[i].split(" ").length;
    if (temp_length > count) {
      count = temp_length;
    }
  }
  return count;
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
console.log(
  mostWordsFound(["please wait", "continue to fight", "continue to win"])
);
