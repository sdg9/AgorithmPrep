/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
export function getUniformIntegerCountInInterval(A, B) {
  return idea1(A, B);
}

function idea1(A, B) {
  let count = 0;
  // non-optimized/brute force.  O(n).  Only passes half the test cases
  let re = new RegExp(/^(\d)(\1*)$/);
  for (let i = A; i <= B; ) {
    if (re.exec(i)) {
      count += 1;
      // i += Math.pow(10, `${i}`.length - 1);
      i += uniformNumberXLength(`${i}`.length);
    } else {
      i += 1;
    }
  }
  return count;
}

// solved 32/33
function uniformNumberXLength(x) {
  return parseInt(
    Array.apply(null, Array(x))
      .map(() => 1)
      .join(''),
    10
  );
}
