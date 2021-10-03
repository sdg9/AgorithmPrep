/**
 * @param {number} N
 * @param {number} F
 * @param {number[]} P
 * @return {number}
 */
export function getSecondsRequired(N, F, P) {
  // Write your code here
  const sortedLilyPads = P.slice(0).sort((a, b) => b - a); // O(n log n)
  let hops = 0;
  for (let i = 0; i < P.length; i++) {
    hops += N - P[i] - i;
  }
  return hops;

  // return P.slice(0)
  //   .sort((a, b) => b - a) // O(n log n)
  //   .reduce((prev, curr, idx) => {
  //     // O(n)
  //     return prev + N - curr - idx;
  //   }, 0);
}
