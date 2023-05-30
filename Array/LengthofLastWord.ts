/** Length of Last Word
 * leetcode 58
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 * 
 * @example 1
 * Input: s = "Hello World"
 * Output: 5
 * Explanation: The last word is "World" with length 5.
 * 
 * @example 2
 * Input: s = "   fly me   to   the moon  "
 * Output: 4
 * Explanation: The last word is "moon" with length 4.
 * 
 * @example 3
 * Input: s = "luffy is still joyboy"
 * Output: 6
 * Explanation: The last word is "joyboy" with length 6.
*/


/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s: string) {
    let len = 0
    s.split(' ').map((buscat)=>{
        if(buscat && buscat !== ' '){
            len = buscat.split('').length
        }
    })
    return len
};

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))
console.log(lengthOfLastWord("Today is a nice day"))