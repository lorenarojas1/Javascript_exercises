const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isInsideBox(peanut, box) {
  const [px, py] = peanut;
  const [x1, y1, x2, y2, boxType] = box;
  return px >= x1 && px <= x2 && py >= y1 && py <= y2 ? boxType : 'floor';
}

function processTestCase() {
  const numBoxes = parseInt(input.shift());
  const boxes = [];

  for (let i = 0; i < numBoxes; i++) {
    const [x1, y1, x2, y2, boxType] = input.shift().split(' ');
    boxes.push([
      parseFloat(x1),
      parseFloat(y1),
      parseFloat(x2),
      parseFloat(y2),
      boxType,
    ]);
  }

  const numPeanuts = parseInt(input.shift());

  for (let i = 0; i < numPeanuts; i++) {
    const [px, py, peanutType] = input.shift().split(' ');
    const result = isInsideBox([parseFloat(px), parseFloat(py)], boxes);
    console.log(`${peanutType} ${result}`);
  }

  console.log(); // Print a blank line between test cases
}

const input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let currentIndex = 0;

  while (currentIndex < input.length) {
    processTestCase();
  }
});

/*
2
0 0 1 1 small
3 2 6 5 large
3
2 0 small
0.5 0.6 medium
3 4 large
3
60.0 2.9 111.4 32.9 medium
20.0 82.6 43.4 153.1 small
34.7 9.6 56.6 78.2 large
6
60.0 8.3 small
43.4 153.1 small
13.4 55.9 medium
61.5 68.1 medium
72.1 69.1 large
78.4 13.2 large
0
*/

/*
small floor
medium small
large correct

small medium
small correct
medium floor
medium floor
large floor
large medium
*/
