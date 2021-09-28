export class LinkedListNode<T> {
  data: T;
  next: LinkedListNode<T>;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export function toArray<T>(node: LinkedListNode<T>) {
  const retVal = [];
  let currentNode = node;
  while (currentNode) {
    retVal.push(currentNode.data);
    currentNode = currentNode.next;
  }
  return retVal;
}
