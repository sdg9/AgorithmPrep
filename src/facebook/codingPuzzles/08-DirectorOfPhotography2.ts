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
  return getArtisticHelper3(N, C, X, Y);
}

// /**
//  * You solved 33 / 39 test cases
//  * @param N
//  * @param C
//  * @param X
//  * @param Y
//  * @returns
//  */
// function getArtisticHelper(N, C, X, Y) {
//   const length = N;
//   const array = C;

//   // step 1 - find unique P.A.B arrays (or B.A.P)
//   // e..g .PBAAP.B creates
//   // .P.A...B
//   // .P..A..B
//   // ..BA.P..
//   // ..B.AP..
//   let artistic = 0;

//   for (let pb = 0; pb < array.length; pb++) {
//     if (array[pb] === 'P' || array[pb] == 'B') {
//       const other = array[pb] === 'P' ? 'B' : 'P';
//       for (let a = pb + X; a < array.length && a - pb <= Y; a++) {
//         if (array[a] === 'A') {
//           for (let b = a + X; b < array.length && b - a <= Y; b++) {
//             if (array[b] === other) {
//               artistic += 1;
//             }
//           }
//         }
//       }
//     }
//   }

//   return artistic;
// }

// function between(x, min, max) {
//   return min <= x && x <= max;
// }

// /**
//  * You solved 15 / 39 test cases
//  * @param N
//  * @param C
//  * @param X
//  * @param Y
//  * @returns
//  */
// function getArtisticHelper2(N, C, X, Y) {
//   const length = N;
//   const array = C;
//   let artistic = 0;

//   let pSet = new Set<number>();
//   let aSet = new Set<number>();
//   let bSet = new Set<number>();

//   // O(n)
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'P') {
//       pSet.add(i);
//     } else if (array[i] === 'A') {
//       aSet.add(i);
//     } else if (array[i] === 'B') {
//       bSet.add(i);
//     }
//   }

//   // O(n^3?)
//   for (let p of pSet) {
//     for (let a of aSet) {
//       for (let b of bSet) {
//         const PA = Math.abs(p - a);
//         const BA = Math.abs(b - a);
//         const PBOppositeA = (p < a && a < b) || (b < a && a < p);
//         artistic +=
//           PBOppositeA && between(PA, X, Y) && between(BA, X, Y) ? 1 : 0;
//       }
//     }
//   }

//   return artistic;
// }

/**
 * Find each A, then count Ps & Bs in X-Y range
 * Solved 39/39 test cases
 * @param N
 * @param C
 * @param X
 * @param Y
 */
function getArtisticHelper3(N, C, X, Y) {
  const length = N;
  const array = C;
  let artistic = 0;

  let lowerP = 0;
  let higherP = 0;
  let lowerB = 0;
  let higherB = 0;

  // Initialize lower bound O(1)
  const initialLower = getItem(array, 0);
  lowerP += initialLower.P;
  lowerB += initialLower.B;

  // Initialize upper bound O(Y-X)
  for (let i = X + X; i <= X + Y; i++) {
    const initialUpper = getItem(array, i);
    higherP += initialUpper.P;
    higherB += initialUpper.B;
  }

  // Iterate through array O(n)
  for (let i = X; i < array.length; i++) {
    if (array[i] === 'A') {
      artistic += lowerP * higherB + lowerB * higherP;
    }
    // set lower/higher values based on next index
    const nextDelta = getNextIterationDelta(array, i, X, Y);
    lowerP += nextDelta.lowerP;
    higherP += nextDelta.higherP;
    lowerB += nextDelta.lowerB;
    higherB += nextDelta.higherB;
  }

  return artistic;
}

function getItem(array, idx) {
  return {
    P: array[idx] === 'P' ? 1 : 0,
    B: array[idx] === 'B' ? 1 : 0
  };
}

function getNextIterationDelta(array, currentIdx, X, Y) {
  const lowerLoss = array[currentIdx - Y];
  const higherLoss = array[currentIdx + X];

  const lowerGain = array[currentIdx - X + 1];
  const higherGain = array[currentIdx + Y + 1];

  return {
    lowerP: (lowerLoss === 'P' ? -1 : 0) + (lowerGain === 'P' ? 1 : 0),
    higherP: (higherLoss === 'P' ? -1 : 0) + (higherGain === 'P' ? 1 : 0),
    lowerB: (lowerLoss === 'B' ? -1 : 0) + (lowerGain === 'B' ? 1 : 0),
    higherB: (higherLoss === 'B' ? -1 : 0) + (higherGain === 'B' ? 1 : 0)
  };
}
