import { getMaxExpectedProfit } from '../10-MissingMail';
describe('09-Hops', () => {
  it.only('should work as intended case 1', () => {
    expect(getMaxExpectedProfit(5, [10, 2, 8, 6, 4], 5, 0)).toBe(25);
  });
  it('should work as intended case 2', () => {
    expect(getMaxExpectedProfit(5, [10, 2, 8, 6, 4], 5, 1)).toBe(9);
  });
  it('should work as intended custom test case 3', () => {
    expect(getMaxExpectedProfit(5, [10, 2, 8, 6, 4], 3, 0.5)).toBe(17);
  });
  it('should work as intended custom test case 4', () => {
    expect(getMaxExpectedProfit(5, [10, 2, 8, 6, 4], 3, 0.15)).toBe(20.10825);
  });
});
