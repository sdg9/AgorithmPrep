import { getMaximumEatenDishCount } from '../03-Kaitenzushi';
describe('03-Kaitenzushi', () => {
  it('should work as intended case 1', () => {
    expect(getMaximumEatenDishCount(6, [1, 2, 3, 3, 2, 1], 1)).toBe(5);
  });
  it('should work as intended case 2', () => {
    expect(getMaximumEatenDishCount(6, [1, 2, 3, 3, 2, 1], 2)).toBe(4);
  });
  it('should work as intended case 3', () => {
    expect(getMaximumEatenDishCount(7, [1, 2, 1, 2, 1, 2, 1], 2)).toBe(2);
  });
});
