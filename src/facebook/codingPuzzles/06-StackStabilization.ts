/**
 * @param {number} N
 * @param {number[]} R
 * @return {number}
 */
export function getMinimumDeflatedDiscCount(N, R) {
  // Write your code here
  const stack: number[] = R;

  // if Ri > i, cannot make stable by deflating
  // const hasAnswer = stack.reduce((prev, curr, idx) => {
  //   return prev && curr > idx;
  // }, true);
  // if (!hasAnswer) {
  //   return -1;
  // }

  // Faster w/ for loop due to early exit
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] <= i) {
      console.log('Failed on i: ' + i);
      return -1;
    }
  }

  const changed = new Set();
  // TODO determine optimal pattern to reduce
  const newStack = stack.map((value, i, array) => {
    if (i == array.length - 1) {
      // no need to ever reduce last #
      return value;
    }

    if (value > array[i + 1]) {
      changed.add(i);
      return i == 0 ? 1 : array[i - 1] + 1;
    } else {
      return value;
    }

    // if (i + 1 > value) {
    //   changed.push(i);
    //   return i == 0 ? 1 : array[i - 1] + 1;
    // } else if (i < array.length && value > array[i]) {
    // } else {
    //   return value;
    // }
  });

  // Iterate set?  Make sure i-1 < i for items in set?  If not change?

  changed.forEach((i: number) => {
    console.log('SEt i: ' + i);
    if (newStack[i - 1] <= newStack[i]) {
      // todo decrease i-1
      newStack[i - 1] = newStack[i - 2] + 1;
      changed.add(i - 1);
    }
  });

  console.log('Changed: ', changed);
  console.log('NewStack: ', newStack);

  return changed.size;
}
