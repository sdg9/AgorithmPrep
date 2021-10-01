/**
 * @param {number} N
 * @param {string} C
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
// export function getArtisticPhotographCount(N, C, X, Y) {
//   // Write your code here
//   return 0;
// }

export function getArtisticPhotographCount(N, C, X, Y) {
  // Write your code here
  return (
    getArtisticHelper(N, C, X, Y) +
    getArtisticHelper(N, C.split('').reverse().join(''), X, Y)
  );
}

// You solved 33 / 39 test cases
function getArtisticHelper(N, C, X, Y) {
  const length = N;
  const array = C;

  // step 1 - find unique P.A.B arrays (or B.A.P)
  // e..g .PBAAP.B creates
  // .P.A...B
  // .P..A..B
  // ..BA.P..
  // ..B.AP..
  let artistic = 0;

  for (let p = 0; p < array.length; p++) {
    if (array[p] === 'P') {
      for (let a = p + X; a < array.length && a - p <= Y; a++) {
        if (array[a] === 'A') {
          for (let b = a + X; b < array.length && b - a <= Y; b++) {
            if (array[b] === 'B') {
              artistic += 1;
            }
          }
        }
      }
    }
  }

  return artistic;
}
