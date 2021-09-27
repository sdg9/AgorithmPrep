/**
 * Sorts by finding minimum element from unsorted list and putting it at the beginning.
 * Time Complexity: O(n^2)
 * @param array
 * @returns
 */
export function selectionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }

      [array[minIdx], array[i]] = [array[i], array[minIdx]];
    }
  }
  return array;
}
