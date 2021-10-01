/**
 * @param {number} N
 * @param {number[]} R
 * @return {number}
 */
export function getMinimumDeflatedDiscCount(N, R) {
  // Write your code here
  const stack: number[] = R;

  return loopSolution(stack);
  // return reduceSolution(stack);
}

function loopSolution(stack) {
  let change = 0;
  for (let i = stack.length - 1; i >= 0; i--) {
    if (stack[i] <= i) {
      return -1;
    }
    if (stack[i] >= stack[i + 1]) {
      stack[i] = stack[i + 1] - 1;
      change += 1;
    }
  }
  return change;
}

function reduceSolution(stack) {
  const change = stack.slice(0).reduceRight((previous, current, i, array) => {
    if (current <= i) {
      array.splice(1);
      return -1;
    }
    if (current >= array[i + 1]) {
      array[i] = array[i + 1] - 1;
      return previous + 1;
    }
    return previous;
  }, 0);
  return change;
}
