/**
 * Transpose Matrix
 * 2D Array | leetcode | 867
 * Given a 2D integer array matrix, return the transpose of matrix.
 * The transpose of a matrix is the matrix flipped over its main diagonal,
 * switching the matrix's row and column indices.
 * @example 1
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[1,4,7],[2,5,8],[3,6,9]]
 */

type matrix = number[][];

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = (matrix: matrix) => {
  let temp: matrix = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!temp[j]) {
        temp.push([]);
      }
      temp[j][i] = matrix[i][j];
    }
  }
  return temp;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
console.log(
  transpose([
    [1, 2, 3, 4],
    [4, 5, 6],
  ])
);
