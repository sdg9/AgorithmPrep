/**
 * @param {number} N
 * @param {number} M
 * @param {number[]} C
 * @return {number}
 */
export function getMinCodeEntryTime(N, M, C) {
  const maxNumber = N;
  const pattern = [1, ...C];

  let distance = 0;
  for (let i = 1; i < pattern.length; i++) {
    const [low, high] = [pattern[i - 1], pattern[i]].sort();

    const distance1 = high - low;
    const distance2 = maxNumber - high + low;

    const time = Math.min(distance1, distance2);
    distance += time;
  }

  // Write your code here
  return distance;
}
