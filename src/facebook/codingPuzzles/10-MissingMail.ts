/**
 * @param {number} N
 * @param {number[]} V
 * @param {number} C
 * @param {number} S
 * @return {number}
 */
export function getMaxExpectedProfit(N, V, C, S) {
  return solution2(N, V, C, S);
}

function solution1(N, V, C, S) {
  // Write your code here
  const retVal = V.reduce(
    (previous, current, idx) => {
      const { sum, pending } = previous;
      const items = [...pending, current];

      const currentValue = summation(items) - C;
      const nextValue = nextSummation(items, S) - C;
      const nsl = nextSummationLoss(items, S);

      console.log(
        `idx: ${idx}, Current value: ${currentValue}, next Value: ${nextValue}`
      );

      // if loss of waiting (Vi * S) < C?
      // greedy: If cost of waiting (stolen loss) is more than visiting room, visit room
      if (nsl > C && currentValue > 0) {
        console.log(`===Choosing ${idx} as loss of ${nsl} is > C ${C}`);
        // console.log('Choosing ' + current + ' with value of ' + currentValue);
        return {
          pending: [],
          sum: sum + currentValue
        };
      } else {
        console.log(`Skipping ${idx} as one round loss of ${nsl} is < C ${C}`);
        return {
          sum: sum,
          pending: items.map((i) => (1 - S) * i)
        };
      }
    },
    { sum: 0, pending: [] }
  );

  const listSum = summation(retVal.pending) - C;
  if (listSum > 0) {
    return retVal.sum + listSum;
  } else {
    return retVal.sum;
  }
}

function summation(list) {
  return list.reduce((prev, curr) => prev + curr, 0);
}
function nextSummation(list, S) {
  return list.reduce((prev, curr) => prev + curr * (1 - S), 0);
}
function nextSummationLoss(list, S) {
  return list.reduce((prev, curr) => prev + curr * S, 0);
}

function solution2(N, V, C, S) {
  const retVal = V.reduceRight(
    (prev, curr, idx) => {
      let { sum, lastChosenIdx } = prev;
      if (sum === 0) {
        if (curr - C > 0) {
          // TODO account for the fact that if this may be only day to enter, so can't just look at this one day
          // e.g. with S = 0, and array ending in 1, it's still better to look after last day than after n-1 day

          // Pick curr
          console.log(
            `Pick ${curr} at idx ${idx} as it is last element and results in > 0`
          );
          sum += curr - C;
          lastChosenIdx = idx;
        } else {
          return prev;
        }
      } else {
        console.log(`Last chosen idx ${lastChosenIdx}, curr idx ${idx}`);
        let stolenMultiplier = Math.pow(1 - S, lastChosenIdx - idx);
        let currentValueIfWait = curr * stolenMultiplier;
        if (currentValueIfWait > curr - C) {
          sum += currentValueIfWait;
        } else {
          // Pick curr
          console.log(
            `Pick ${curr} at idx ${idx} as it results in ${
              curr - C
            } (if waited ${currentValueIfWait})`
          );
          sum += curr - C;
          lastChosenIdx = idx;
        }
      }

      return {
        sum,
        lastChosenIdx
      };
    },
    {
      sum: 0,
      lastChosenIdx: -1
    }
  );
  return retVal.sum;
}
