import { bubbleSort } from '../bubbleSort';
describe('bubbleSort', () => {
  it('should sort the list', () => {
    expect(bubbleSort([1, 5, 10, 7, -1])).toEqual([-1, 1, 5, 7, 10]);
  });
});
