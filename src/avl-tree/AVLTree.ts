type NodeOrNull<T> = Node_<T> | null;

class Node_<T> {
  public value: T;
  public leftChild: NodeOrNull<T> = null;
  public rightChild: NodeOrNull<T> = null;
  public height: number = 0;

  constructor(value: T) {
    this.value = value;
  }

  toString() {
    return this.value;
  }
}

export class AVLTree<T> {
  public root: NodeOrNull<T> = null;

  public insert(value: T) {
    this.root = this.insertInternal(this.root, value);
  }

  private insertInternal(root: NodeOrNull<T>, value: T): Node_<T> {
    if (root == null) {
      return new Node_<T>(value);
    }
    if (value < root.value) {
      root.leftChild = this.insertInternal(root.leftChild, value);
    } else {
      root.rightChild = this.insertInternal(root.rightChild, value);
    }

    this.setHeight(root)
    return this.balance(root);
  }

  private balance(root: Node_<T>) {
    if (this.isLeftHeavy(root)) {
      if (this.balanceFactor(root.leftChild) < 0) {
        root.leftChild = this.rotateLeft(root.leftChild!);
      }
      return this.rotateRight(root);
    } else if (this.isRightHeavy(root)) {
      if (this.balanceFactor(root.rightChild) > 0) {
        root.rightChild = this.rotateRight(root.rightChild!);
      }
      return this.rotateLeft(root);
    }

    return root;
  }

  private rotateLeft(root: Node_<T>) {
    let newRoot = root.rightChild!;

    root.rightChild = newRoot.leftChild;
    newRoot.leftChild = root;

    this.setHeight(root);
    this.setHeight(newRoot);

    return newRoot;
  }

  private rotateRight(root: Node_<T>) {
    let newRoot = root.leftChild!;

    root.leftChild = newRoot.rightChild;
    newRoot.rightChild = root;

    this.setHeight(root);
    this.setHeight(newRoot);

    return newRoot;
  }

  private isLeftHeavy(node: NodeOrNull<T>) {
    return this.balanceFactor(node) > 1;
  }

  private isRightHeavy(node: NodeOrNull<T>) {
    return this.balanceFactor(node) < -1;
  }

  private balanceFactor(node: NodeOrNull<T>) {
    return node == null ? 0 : this.height(node.leftChild) - this.height(node.rightChild);
  }

  private setHeight(node: Node_<T>) {
    node.height = Math.max(this.height(node.leftChild), this.height(node.rightChild)) + 1;
  }

  private height(node: NodeOrNull<T>) {
    return node == null ? -1 : node.height;
  }
}