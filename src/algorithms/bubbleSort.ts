export function bubbleSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    // after each iteration of i, the array.length - ith element will be guaranteed to be in the proper position so don't check again
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
