/**
 * To find the objects count in the given array.
 * */

let arr = ["aa", "aa", "bb", "abc", "bb", "aa", "mg", "abc", "aa", "dd"];

const countHunter = (data: string[]) => {
  if (!data || data.length === 0) return 0;
  let tempObj: { [key: string]: number } = {};

  for (let i = 0; i < data.length; i++) {
    if (Object.keys(tempObj).includes(data[i])) {
      tempObj[data[i]] = tempObj[data[i]] + 1;
    } else {
      tempObj[data[i]] = 1;
    }
  }
  return tempObj;
};

let resObj = countHunter(arr);
console.log(resObj);

/**
 * To find the objects count
 * */
