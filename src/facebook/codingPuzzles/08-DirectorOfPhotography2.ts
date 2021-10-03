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
  return getArtisticHelper2(N, C, X, Y);
  // getArtisticHelper(N, C.split('').reverse().join(''), X, Y)
}

/**
 * You solved 33 / 39 test cases
 * @param N
 * @param C
 * @param X
 * @param Y
 * @returns
 */
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

  for (let pb = 0; pb < array.length; pb++) {
    if (array[pb] === 'P' || array[pb] == 'B') {
      const other = array[pb] === 'P' ? 'B' : 'P';
      for (let a = pb + X; a < array.length && a - pb <= Y; a++) {
        if (array[a] === 'A') {
          for (let b = a + X; b < array.length && b - a <= Y; b++) {
            if (array[b] === other) {
              artistic += 1;
            }
          }
        }
      }
    }
  }

  return artistic;
}

function between(x, min, max) {
  return min <= x && x <= max;
}

/**
 * You solved 15 / 39 test cases
 * @param N
 * @param C
 * @param X
 * @param Y
 * @returns
 */
function getArtisticHelper2(N, C, X, Y) {
  const length = N;
  const array = C;
  let artistic = 0;

  let pSet = new Set<number>();
  let aSet = new Set<number>();
  let bSet = new Set<number>();

  // O(n)
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'P') {
      pSet.add(i);
    } else if (array[i] === 'A') {
      aSet.add(i);
    } else if (array[i] === 'B') {
      bSet.add(i);
    }
  }

  // O(n^3?)
  for (let p of pSet) {
    for (let a of aSet) {
      for (let b of bSet) {
        const PA = Math.abs(p - a);
        const BA = Math.abs(b - a);
        const PBOppositeA = (p < a && a < b) || (b < a && a < p);
        artistic +=
          PBOppositeA && between(PA, X, Y) && between(BA, X, Y) ? 1 : 0;
      }
    }
  }

  return artistic;
}
