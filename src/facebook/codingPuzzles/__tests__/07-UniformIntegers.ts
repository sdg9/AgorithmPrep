import { getUniformIntegerCountInInterval } from '../07-UniformIntegers';
describe('07-UniformIntegers', () => {
  it('should work as intended case 1', () => {
    expect(getUniformIntegerCountInInterval(75, 300)).toBe(5);
  });
  it('should work as intended case 2', () => {
    expect(getUniformIntegerCountInInterval(1, 9)).toBe(9);
  });
  it('should work as intended case 3', () => {
    expect(getUniformIntegerCountInInterval(999999999999, 999999999999)).toBe(
      1
    );
  });
  it('should work as intended case 4', () => {
    expect(getUniformIntegerCountInInterval(0, Number.MAX_SAFE_INTEGER)).toBe(
      144
    );
  });
});
