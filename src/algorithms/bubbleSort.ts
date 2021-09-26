export function bubbleSort(array: number[]) {
  let isDirty = false;
  for (let i = 0; i < array.length; i++) {
    // after each iteration of i, the array.length - ith element will be guaranteed to be in the proper position so don't check again
    isDirty = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isDirty = true;
      }
    }
    if (!isDirty) {
      // save some CPU cycles if array is sorted (nothing changed this iteration)
      break;
    }
  }
  return array;
}
