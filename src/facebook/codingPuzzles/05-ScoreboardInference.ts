/**
 * @param {number} N
 * @param {number[]} S
 * @return {number}
 */
export function getMinProblemCount(N, S) {
  // Write your code here

  const scores: number[] = S;

  // Max
  //   const max1s = Math.max(...scores);
  //   const max2s = Math.ceil(max1s / 2);

  const { maxEven, maxOdd } = scores.reduce(
    (previous, current) => {
      return {
        maxEven:
          current % 2 == 0 && current > previous.maxEven
            ? current
            : previous.maxEven,
        maxOdd:
          current % 2 == 1 && current > previous.maxOdd
            ? current
            : previous.maxOdd
      };
    },
    { maxEven: 0, maxOdd: 0 }
  );

  //   console.log('Max Even: ', maxEven);
  //   console.log('Max Odd: ', maxOdd);

  let retVal = 0;
  if (maxOdd == 0) {
    // if no odd, everything is a 2 pointer
    retVal = maxEven / 2;
  } else if (maxOdd > maxEven) {
    // if there are higher odd scores, comprise all even scores of 2 pointers and make odd scores comprised of as many 2 pointers as possible
    retVal = maxEven / 2 + Math.ceil((maxOdd - maxEven) / 2);
  } else {
    // if there are higher even scores, comprise highest odd score of all 2 pointers and a 1 pointer, then remaining even pointers of all 2 pointers (and ceil means it uses a 1 poiner if required)
    retVal = Math.ceil(maxOdd / 2) + Math.ceil((maxEven - maxOdd) / 2);
  }

  //   if (maxOdd < maxEven) return maxEven / 2 + (maxOdd > 0 ? 1 : 0);
  return retVal;
}

// Idea 1

//   const difference = Math.abs(maxEven - maxOdd);
//   const scoresToAchieveDifference =

//   console.log('MinBasedOnHS: ', minimumQuestionsBasedOnHighScore);

//   let questionPoints = [];

//   scores.forEach((score) => {
//     console.log(`Current score: ${score}, existing points: ${questionPoints}`);

/*
    // TODO how to determine if it's better for say a 3 point score to use a new 2 + old 1, or say 3 old 1s.
    const pointsAfterExistingScoreBuckets = questionPoints.reduce(
      (prev, cur) => {
        // This is too naive
        return prev - cur;
      },
      score
    );

    // This likely won't be optimized
    const twoBuckets = Math.floor(pointsAfterExistingScoreBuckets / 2);
    const oneBuckets = pointsAfterExistingScoreBuckets % 2;
    console.log(`Two Buckets: ${twoBuckets}\nOne Buckets: ${oneBuckets}`);

    questionPoints = questionPoints
      .concat(Array.apply(null, Array(twoBuckets)).map((i) => 2))
      .concat(Array.apply(null, Array(oneBuckets)).map((i) => 1));

    console.log(`Points after score: ${questionPoints}\n`);
    */
//   });

// too naive
