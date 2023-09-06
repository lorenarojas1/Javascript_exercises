function towerBreakers(n, m) {
  // Write your code here
  if (m === 1 || n % 2 === 0) {
    return 2;
  }
  return 1;
}

console.log(towerBreakers(2, 2));

console.log(towerBreakers(1, 4));
