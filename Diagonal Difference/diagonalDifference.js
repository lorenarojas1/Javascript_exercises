/* eslint-disable no-plusplus */
const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

// Output 15

function diagonalDifference() {
  // Write your code here
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        sum1 += arr[i][j];
      }
      if (i + j === arr.length - 1) {
        sum2 += arr[i][j];
      }
    }
  }
  const result = Math.abs(sum1 - sum2);

  return result;
}

console.log(diagonalDifference(arr));
