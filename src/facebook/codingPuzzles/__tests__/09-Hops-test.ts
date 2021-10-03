import { getSecondsRequired } from '../09-Hops';
describe('09-Hops', () => {
  it('should work as intended case 1', () => {
    expect(getSecondsRequired(3, 1, [1])).toBe(2);
  });
  it('should work as intended case 2', () => {
    expect(getSecondsRequired(6, 3, [5, 2, 4])).toBe(4);
  });
});
