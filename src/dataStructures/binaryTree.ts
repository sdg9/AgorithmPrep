export class TreeNode<T> {
  key: T;
  left: TreeNode<T>;
  right: TreeNode<T>;

  constructor(val: T) {
    this.key = val;
    this.left = null;
    this.right = null;
  }
}

export function postOrder<T>(node: TreeNode<T>) {
  if (node == null) {
    return [];
  }

  return [...postOrder(node.left), ...postOrder(node.right), node.key];
}
