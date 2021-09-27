/**
 * @param {number} N
 * @param {number} K
 * @param {number} M
 * @param {number[]} S
 * @return {number}
 */
export function getMaxAdditionalDinersCount(N, K, M, S) {
  const seats = N;
  const gap = K;
  const dinersAtTable = M;
  const sortedSeatedDiners = [...S].sort((a, b) => a - b);

  let guests = sortedSeatedDiners.reduce(
    (total, dinerSeat) => {
      const sitInRange = Math.floor((dinerSeat - total.start) / (gap + 1));
      return {
        start: dinerSeat + gap + 1,
        openings: total.openings + sitInRange
      };
    },
    { start: 1, openings: 0 }
  );

  if (guests.start <= seats) {
    const sitInRange = Math.ceil((seats - guests.start + 1) / (gap + 1));
    guests.openings += sitInRange;
  }

  return guests.openings;
}
