import { TreeNode, postOrder } from '../binaryTree';
describe('BinaryTree', () => {
  it('should print in postorder', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);

    expect(postOrder(root)).toEqual([4, 5, 2, 3, 1]);
  });
});
