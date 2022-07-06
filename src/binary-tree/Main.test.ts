import {BinaryTree} from "./BinaryTree";

test('should find the value in binary tree', () => {
  let binaryTree = new BinaryTree<number>();

  binaryTree.insert(20)
  binaryTree.insert(10)
  binaryTree.insert(30)
  binaryTree.insert(40)


  expect(binaryTree.find(30)).toBe(true);
});

test('should not find value that does not exist', () => {
  let binaryTree = new BinaryTree<number>();

  binaryTree.insert(20)
  binaryTree.insert(10)
  binaryTree.insert(30)
  binaryTree.insert(40)


  expect(binaryTree.find(50)).toBe(false);
});

test('should return in order values', () => {
  let binaryTree = new BinaryTree<number>();

  binaryTree.insert(20)
  binaryTree.insert(10)
  binaryTree.insert(30)


  expect(binaryTree.inOrderTraverse()).toEqual([10, 20, 30]);
});

test('should return pre order values', () => {
  let binaryTree = new BinaryTree<number>();

  binaryTree.insert(20)
  binaryTree.insert(10)
  binaryTree.insert(30)


  expect(binaryTree.preOrderTraverse()).toEqual([20, 10, 30]);
});

test('should return post order values', () => {
  let binaryTree = new BinaryTree<number>();

  binaryTree.insert(20)
  binaryTree.insert(10)
  binaryTree.insert(30)


  expect(binaryTree.postOrderTraverse()).toEqual([10, 30, 20]);
});