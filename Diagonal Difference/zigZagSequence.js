/* eslint-disable no-plusplus */

const data = [1, 2, 3, 4, 5, 6, 7];

function processData() {
  const n = data.length;
  const mid = Math.floor(data.length / 2);
  const midNumber = data.slice(n - 1);

  const arr1 = data.slice(0, mid);
  const arr2 = data.slice(mid, n - 1).reverse();
  const result = [...arr1, ...midNumber, ...arr2];
  return result;
}

console.log(processData(data));
