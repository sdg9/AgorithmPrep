import { getMaximumEatenDishCount } from '../03-Kaitenzushi';
import { performance } from 'perf_hooks';
describe('03-Kaitenzushi', () => {
  it('should work as intended case 1', () => {
    expect(getMaximumEatenDishCount(6, [1, 2, 3, 3, 2, 1], 1)).toBe(5);
  });
  it('should work as intended case 2', () => {
    expect(getMaximumEatenDishCount(6, [1, 2, 3, 3, 2, 1], 2)).toBe(4);
  });
  it('should work as intended case 3', () => {
    var startTime = performance.now();
    const answer = getMaximumEatenDishCount(7, [1, 2, 1, 2, 1, 2, 1], 2);
    var endTime = performance.now();

    // console.log(
    //   `Call to getMaximumEatenDishCount took ${
    //     endTime - startTime
    //   } milliseconds`
    // );
    expect(answer).toBe(2);
  });
  it('should work as intended case 4', () => {
    let dishes = [];
    for (let i = 0; i < 10000; i++) {
      dishes = dishes.concat([1, 2, 1, 2, 1, 2, 1]);
    }
    var startTime = performance.now();
    const answer = getMaximumEatenDishCount(7, dishes, 2);
    var endTime = performance.now();

    console.log(
      `Call to getMaximumEatenDishCount took ${
        endTime - startTime
      } milliseconds`
    );
    expect(answer).toBe(2);
  });
});
