/* eslint-disable no-plusplus */
const grid = ['eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv'];

function gridChallenge() {
  const arr = [];
  for (let a = 0; a < grid.length; a++) {
    const textSort = grid[a].split('').sort();
    arr.push(textSort);
  }

  const column = arr[0].length;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < column; j++) {
      if (arr[i][j] > arr[i + 1][j]) {
        return 'NO';
      }
    }
  }
  return 'YES';
}

console.log(gridChallenge(grid));
