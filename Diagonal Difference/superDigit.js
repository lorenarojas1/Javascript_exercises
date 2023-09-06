/* eslint-disable no-plusplus */
// 9+8+7+5 = 29
// 2+9 = 11
// 1+1 = 2

const n = '9875';
const k = 4;

function superDigit() {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += Number(n[i]);
  }
  sum *= k;
  console.log(sum);
  while (sum > 10) {
    const newN = `${sum}`;
    sum = 0;
    for (let i = 0; i < newN.length; i++) {
      sum += Number(newN[i]);
    }
  }
  return sum;
}

console.log(superDigit(n, k));
