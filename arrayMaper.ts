/**
 * Arrange the given array in single array.
 * */

let arrQ = [2, 5, [6, 3, [1, 8], 7], [14, 15], 4];

type maper = (number | (number | number[])[])[];

const maper = (runner: maper) => {
  let tempstorage = [];
  for (let i = 0; i < runner.length; i++) {
    if (typeof runner[i] === "object") {
      let collect: maper = maper(runner[i] as maper);
      tempstorage.push(...collect);
    } else {
      tempstorage.push(runner[i]);
    }
  }
  return tempstorage;
};

let res = maper(arrQ);
console.log(res);
/**
 * Array maper
 * */
