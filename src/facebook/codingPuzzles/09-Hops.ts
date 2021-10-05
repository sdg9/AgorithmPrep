/**
 * @param {number} N
 * @param {number} F
 * @param {number[]} P
 * @return {number}
 */
export function getSecondsRequired(N, F, P) {
  // Write your code here
  return attempt5(N, F, P);
}

function attempt1(N, F, P) {
  return P.slice(0)
    .sort((a, b) => b - a) // O(n log n)
    .reduce((prev, curr, idx) => {
      // O(n)
      return prev + N - curr - idx;
    }, 0);
}
function attempt2(N, F, P) {
  const sortedLilyPads = P.slice(0).sort((a, b) => b - a); // O(n log n)
  let hops = 0;
  for (let i = 0; i < P.length; i++) {
    hops += N - P[i] - i;
  }
  return hops;
}

/**
 * Sorting actually isn't required b/c we want the summation of all hops, not frog specific hops
 * @param N
 * @param F
 * @param P
 * @returns
 */
function attempt3(N, F, P) {
  // O(n)
  return P.reduce((prev, curr, idx) => {
    return prev + N - curr - idx;
  }, 0);
}

function attempt4(N, F, P) {
  // O(n)
  return (
    P.reduce((prev, curr, idx) => {
      return prev + N - curr;
    }, 0) - getSkippedHops(F)
  );
  // (Math.pow(F - 1, 2) + F - 1) / 2
}

function getMaximumHops(N, F, P) {
  return P.reduce((prev, curr) => {
    const distanceToShore = N - curr;
    return prev + distanceToShore;
  }, 0);
}

/**
 * nth triangle number but starting at 0
 * nomrally F * (F + 1) / 2
 * @param F
 * @returns
 */
function getSkippedHops(F) {
  return ((F - 1) * F) / 2;
}

function attempt5(N, F, P) {
  return getMaximumHops(N, F, P) - getSkippedHops(F);
}
