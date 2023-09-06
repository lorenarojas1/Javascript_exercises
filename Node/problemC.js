function calculateUniqueness(cards, card) {
  const [r1, g1, b1] = card;
  let uniqueness = 0;

  for (const [r2, g2, b2] of cards) {
    const dr = Math.abs(r1 - r2);
    const dg = Math.abs(g1 - g2);
    const db = Math.abs(b1 - b2);
    uniqueness += dr + dg + db;
  }

  return uniqueness;
}

function sellCards(cards) {
  const sortedCards = [...cards].sort((a, b) => {
    const uniquenessA = calculateUniqueness(cards, a);
    const uniquenessB = calculateUniqueness(cards, b);

    if (uniquenessA === uniquenessB) {
      return a[3] - b[3];
    }

    return uniquenessA - uniquenessB;
  });

  return sortedCards.map((card) => card[3]);
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
const cards = [];

rl.question('', (input) => {
  n = parseInt(input);

  rl.on('line', (line) => {
    const [r, g, b, id] = line.trim().split(' ').map(Number);
    cards.push([r, g, b, id]);

    if (cards.length === n) {
      const soldCards = sellCards(cards);
      console.log(soldCards.join('\n'));
      rl.close();
    }
  });
});
/*
3
42 1 1 1
90 1 1 2
110 1 1 3
*/

/*
2
3
1
*/

/*
4
0 0 0 0
120 120 120 120
240 240 240 240
0 120 240 2017
*/

/*
2017
240
120
0
*/
