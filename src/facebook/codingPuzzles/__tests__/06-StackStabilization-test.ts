import { getMinimumDeflatedDiscCount } from '../06-StackStabilization';
describe('06-StackStabilization', () => {
  it('should work as intended case 1', () => {
    expect(getMinimumDeflatedDiscCount(5, [2, 5, 3, 6, 5])).toBe(3);
  });
  it('should work as intended case 2', () => {
    expect(getMinimumDeflatedDiscCount(3, [100, 100, 100])).toBe(2);
  });
  it('should work as intended case 3', () => {
    expect(getMinimumDeflatedDiscCount(4, [6, 5, 4, 3])).toBe(-1);
  });
});
