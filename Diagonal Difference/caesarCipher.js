/* eslint-disable no-plusplus */
const s = 'middle-Outz';
const k = 2;

// okffng-Qwvb

function caesarCipher() {
  // Write your code here
  const lowerA = 'abcdefghijklmnopqrstuvwxyz';
  const upperA = lowerA.toUpperCase();
  const res = s.split('').map((c) => {
    if (lowerA.includes(c)) {
      return lowerA[(lowerA.indexOf(c) + k) % 26];
    } if (upperA.includes(c)) {
      return upperA[(upperA.indexOf(c) + k) % 26];
    }
    return c;
  });

  return res.join('');
}

console.log(caesarCipher(s, k));
