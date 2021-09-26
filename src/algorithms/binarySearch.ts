/**
 * Sorts in O(log n) time as it divides the array in half each search.
 * @param array
 * @param goal
 * @param start
 * @param end
 * @returns
 */
export function binarySearch(
  array: number[],
  goal: number,
  start: number = 0,
  end: number = array.length
) {
  if (start > end) {
    return false;
  }

  let middle = Math.floor((start + end) / 2);

  if (array[middle] === goal) {
    return true;
  }

  if (array[middle] > goal) {
    return binarySearch(array, goal, start, middle - 1);
  } else {
    return binarySearch(array, goal, middle + 1, end);
  }
}
