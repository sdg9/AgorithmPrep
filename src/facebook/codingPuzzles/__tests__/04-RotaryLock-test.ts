import { getMinCodeEntryTime } from '../04-RotaryLock';
describe('04-RotaryLock', () => {
  it('should work as intended case 1', () => {
    expect(getMinCodeEntryTime(3, 3, [1, 2, 3])).toBe(2);
  });
  it('should work as intended case 2', () => {
    expect(getMinCodeEntryTime(10, 4, [9, 4, 4, 8])).toBe(11);
  });
});
