/* eslint-disable no-plusplus */
// 3
// aaab
// baa
// aaa

function palindromeIndex(s) {
  let result = -1;
  const slen = s.length;

  if (slen >= 1 && slen <= 100005 && s !== s.split('').reverse().join('')) {
    for (let i = 0; i < slen; i++) {
      if (s.charAt(i) !== s.charAt(slen - 1 - i)) {
        const s1 = s.substring(0, i) + s.substring((i + 1));
        const s2 = s.substring(0, (slen - 1 - i)) + s.substring((slen - 1 - i) + 1);
        if (s1 === s1.split('').reverse().join('')) {
          result = i;
        } else if (s2 === s2.split('').reverse().join('')) {
          result = slen - 1 - i;
        }
        break;
      }
    }
  }

  return result;
}

console.log(palindromeIndex('aaab'));
console.log(palindromeIndex('baa'));
console.log(palindromeIndex('aaa'));
// 3
// 0
// -1
