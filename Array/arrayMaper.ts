/**
 * Arrange the given array in single array sorted.
 * */

let arrQ = [2, 11, 5, [6, 3, [1, 8], 7], [14, 15], 4];

type mapertype = (number | (number | number[])[])[];

//Insertion Sort
const InsertionSort = (buscat: number[]) => {
  for (let i = 0; i < buscat.length; i++) {
    for (let j = i; j < buscat.length; j++) {
      if (buscat[i] > buscat[j]) {
        [buscat[i], buscat[j]] = [buscat[j], buscat[i]];
      }
    }
  }
  return buscat;
};

//Bubble sort
const BubbleSort = (arr: number[]) => {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

//make into single array
const maper = (runner: mapertype) => {
  let tempstorage = [];
  for (let i = 0; i < runner.length; i++) {
    if (typeof runner[i] === "object") {
      let collect: mapertype = maper(runner[i] as mapertype);
      tempstorage.push(...collect);
    } else {
      tempstorage.push(runner[i]);
    }
  }

  //return InsertionSort(tempstorage as number[]);
  return BubbleSort(tempstorage as number[]);
};

let res = maper(arrQ);
console.log(res);
/**
 * Chnage to single array.
 * Sort array
 * */
