/**
 * @param {number} N
 * @param {number[]} D
 * @param {number} K
 * @return {number}
 */
export function getMaximumEatenDishCount(N, D, K) {
  // Write your code here
  const array = D;
  const historyLength = K;

  // only passing 32/33 tests, something is too slow about this
  const cache = new Map();

  let eat = 0;
  for (let i of array) {
    if (!cache.has(i)) {
      eat += 1;
      if (cache.size == historyLength) {
        cache.delete(cache.keys().next().value);
      }
      cache.set(i, true);
    }
  }

  return eat;
}
