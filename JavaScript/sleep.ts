/** Sleep
 * Leetcode JavaScript | 2621
 * Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds.
 * It can resolve any value.
 * 
 * @example 1
 * Input: millis = 100
 * Output: 100
 * Explanation: It should return a promise that resolves after 100ms.
 * let t = Date.now();
 * sleep(100).then(() => {
 * console.log(Date.now() - t); // 100});
 */

/**
 * @param {number} millis
 */
async function sleep(millis : number) {
    return new Promise<void>((res)=>{
        setTimeout(()=>{
            res()
        },millis)
    })
}


 let t = Date.now()
 sleep(100).then(() => console.log(Date.now() - t)) // 100
 
