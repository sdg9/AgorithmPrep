import { getMaxAdditionalDinersCount } from '../01-Cafeteria';
describe('01-Cafeteria', () => {
  it('should work as intended case 1', () => {
    expect(getMaxAdditionalDinersCount(10, 1, 2, [2, 6])).toBe(3);
  });
  it('should work as intended case 2', () => {
    expect(getMaxAdditionalDinersCount(15, 2, 3, [11, 6, 14])).toBe(1);
  });
});
