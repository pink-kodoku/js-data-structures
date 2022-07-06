class Node<T> {
  public value: T;
  public left: Node<T> | null = null;
  public right: Node<T> | null = null;
  public height: number = 0;

  constructor(value: T) {
    this.value = value;
  }

}

export class BinaryTree<T> {
  private root: Node<T> | null = null;

  private isEmpty(): boolean {
    return this.root == null;
  }

  public insert(value: T): void {
    const node: Node<T> = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (current != null) {
      if (current.value > value) {
        if (current.left == null) {
          current.left = node;
          return;
        }
        current = current.left;
      }
      if (current.value < value) {
        if (current.right == null) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }

  public find(value: T): boolean {
    if (this.isEmpty()) {
      return false;
    }

    let current = this.root;
    while (current != null) {
      if (current.value > value) {
        current = current.left;
      } else if (current.value < value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  // pre-order root, left, right
  // in-order left, root, right
  // post-order left, right, root

  public preOrderTraverse(): T[] {
    let items: T[] = [];
    this.preOrderTraverseInternal(this.root, items)
    return items;
  }

  private preOrderTraverseInternal(node: Node<T> | null, items: T[]) {
    if (node == null) {
      return;
    }

    items.push(node.value)
    this.preOrderTraverseInternal(node.left, items);
    this.preOrderTraverseInternal(node.right, items);
  }

  public inOrderTraverse(): T[] {
    let items: T[] = [];
    this.inOrderTraverseInternal(this.root, items)

    return items;
  }

  private inOrderTraverseInternal(node: Node<T> | null, items: T[]) {
    if (node == null) {
      return;
    }

    this.inOrderTraverseInternal(node.left, items);
    items.push(node.value)
    this.inOrderTraverseInternal(node.right, items);
  }


  public postOrderTraverse(): T[] {
    let items: T[] = []
    this.postOrderTraverseInternal(this.root, items)
    return items;
  }

  private postOrderTraverseInternal(node: Node<T> | null, items: T[]) {
    if (node == null) {
      return;
    }

    this.postOrderTraverseInternal(node.left, items);
    this.postOrderTraverseInternal(node.right, items);
    items.push(node.value)
  }


}