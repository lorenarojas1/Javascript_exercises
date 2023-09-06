function isWithinBounds(x, y, n, m) {
  return x >= 0 && x < n && y >= 0 && y < m;
}

function simulatePumpkinGrowth(pumpkins, days, n, m) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const alivePumpkins = [];

  for (const [x, y] of pumpkins) {
    const roots = new Set();
    let alive = true;

    for (let day = 0; day < days; day++) {
      if (!alive) break;

      const newRoots = new Set();
      for (const [rootX, rootY] of roots) {
        for (const [dx, dy] of directions) {
          const newX = rootX + dx;
          const newY = rootY + dy;
          if (isWithinBounds(newX, newY, n, m)) {
            newRoots.add([newX, newY].toString());
          }
        }
      }

      newRoots.add([x, y].toString());

      for (const [newX, newY] of newRoots) {
        if (
          alivePumpkins.some((pumpkin) => pumpkin === [newX, newY].toString())
        ) {
          alive = false;
          break;
        }
      }

      roots.clear();
      newRoots.forEach((root) => roots.add(root));
    }

    if (alive) {
      alivePumpkins.push([x, y].toString());
    }
  }

  return alivePumpkins;
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, days, m;
const pumpkins = [];

rl.question('', (input) => {
  [n, days, m] = input.trim().split(' ').map(Number);

  rl.on('line', (line) => {
    const [x, y] = line.trim().split(' ').map(Number);
    pumpkins.push([x, y]);

    if (pumpkins.length === n) {
      const result = simulatePumpkinGrowth(pumpkins, days, n, m);

      for (const [x, y] of pumpkins) {
        if (result.includes([x, y].toString())) {
          console.log('ALIVE');
        } else {
          console.log(days);
        }
      }

      rl.close();
    }
  });
});


/*
4 2 8
3 2
5 5
4 3
1 1
*/

/*
4 2 8
3 2
5 5
4 3
1 1
*/

/*
5 3 10
0 0
6 3
6 4
3 6
2 1
*/

/*
1
1
1
ALIVE
2
*/