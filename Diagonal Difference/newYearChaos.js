/* eslint-disable no-plusplus */

function minimumBribes(q) {
  let count = 0;
  let chaotic = false;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - i > 3) {
      chaotic = true;
    }
    for (let j = q[i] - 2; j < i; j++) {
      if (q[j] > q[i]) {
        count++;
      }
    }
  }
  if (chaotic) {
    return 'Too chaotic';
  }
  return count;
}

console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]));

console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));

function minimumBribes2(q) {
  // Write your code here
  let counter = 0;
  let currentPosition = q.length - 1;
  let log = '';
  let bribes;

  while (currentPosition >= 0) {
    const current = q[currentPosition];
    const orderPosition = currentPosition + 1;

    bribes = current - orderPosition;

    if (bribes >= 3) {
      console.log('Too chaotic');
      return;
    }

    const briberPosition = current - 2;

    for (
      let comparePosition = Math.max(0, briberPosition);
      comparePosition < currentPosition;
      comparePosition++
    ) {
      const compare = q[comparePosition];

      if (compare > current) {
        counter++;
      }
    }

    currentPosition--;
  }

  console.log(counter);
}
