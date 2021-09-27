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

  const history = [];

  let eat = 0;
  let map = new Map<number, number>();
  for (let i = 0; i < array.length; i++) {
    // if (!history.includes(array[i])) {
    if (map.get(array[i]) >= 1) {
      // ignore
    } else {
      map.set(array[i], 1);
      eat += 1;
    }

    if (i >= historyLength) {
      map.set(array[i + 1 - historyLength], 0);
    }
    // map.set(array[i], 1);
    // history.push(array[i]);
    // if (history.length > historyLength) {
    // history.shift();
    // }
  }

  return eat;
}
