import { binarySearch } from '../binarySearch';

describe('binarySearch', () => {
  const array = [1, 2, 3, 5, 7, 9, 11];
  it('should find valid result', () => {
    expect(binarySearch(array, 7)).toBe(true);
  });

  it('should not find invalid result', () => {
    expect(binarySearch(array, 8)).toBe(false);
  });
});
