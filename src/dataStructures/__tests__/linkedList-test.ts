import { LinkedListNode, toArray } from '../linkedList';
describe('LinkedList', () => {
  it('should print in postorder', () => {
    const head = new LinkedListNode(1);
    head.next = new LinkedListNode(2);
    head.next.next = new LinkedListNode(3);

    expect(toArray(head)).toEqual([1, 2, 3]);
  });
});
