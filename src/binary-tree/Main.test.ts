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

test('should return height of the tree', () => {
  let binaryTree = new BinaryTree<number>();

  binaryTree.insert(20)
  binaryTree.insert(10)
  binaryTree.insert(30)


  expect(binaryTree.height()).toEqual(1);
});

test('should return min value', () => {
  let binaryTree = new BinaryTree<number>();

  binaryTree.insert(20)
  binaryTree.insert(10)
  binaryTree.insert(30)


  expect(binaryTree.minValue()).toEqual(10);
});

test('should return min value', () => {
  let binaryTree = new BinaryTree<number>();

  binaryTree.insert(20)
  binaryTree.insert(10)
  binaryTree.insert(5)
  binaryTree.insert(3)
  binaryTree.insert(1)
  binaryTree.insert(33)
  binaryTree.insert(55)
  binaryTree.insert(30)


  expect(binaryTree.minValue()).toEqual(1);
});


test('two trees should be equal', () => {
  let binaryTree = new BinaryTree<number>();

  binaryTree.insert(20)
  binaryTree.insert(10)
  binaryTree.insert(5)

  let binaryTree2 = new BinaryTree<number>()

  binaryTree2.insert(20)
  binaryTree2.insert(10)
  binaryTree2.insert(5)


  expect(binaryTree.equals(binaryTree2)).toBe(true);
});

test('should lever traverse the tree', () => {
  let binaryTree = new BinaryTree<number>();

  binaryTree.insert(20)
  binaryTree.insert(30)
  binaryTree.insert(40)
  binaryTree.insert(10)
  binaryTree.insert(5)
  binaryTree.insert(55)


  expect(binaryTree.traverseLevelOrder()).toEqual([20, 10, 30, 5, 40, 55]);
});
