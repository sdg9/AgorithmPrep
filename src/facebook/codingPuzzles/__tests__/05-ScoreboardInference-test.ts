import { getMinProblemCount } from '../05-ScoreboardInference';
describe('05-ScorebaordInference', () => {
  it('should work as intended case 1', () => {
    expect(getMinProblemCount(6, [1, 2, 3, 4, 5, 6])).toBe(4);
  });
  it('should work as intended case 2', () => {
    expect(getMinProblemCount(4, [4, 3, 3, 4])).toBe(3);
  });
  it('should work as intended case 3', () => {
    expect(getMinProblemCount(4, [2, 4, 6, 8])).toBe(4);
  });
});
