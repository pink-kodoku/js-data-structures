import {Errors} from "../errors/errors.enum";

type NodeOrNull<T> = Node<T> | null;

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
  private root: NodeOrNull<T> = null;

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

  private preOrderTraverseInternal(node: NodeOrNull<T>, items: T[]) {
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

  private inOrderTraverseInternal(node: NodeOrNull<T>, items: T[]) {
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

  private postOrderTraverseInternal(node: NodeOrNull<T>, items: T[]) {
    if (node == null) {
      return;
    }

    this.postOrderTraverseInternal(node.left, items);
    this.postOrderTraverseInternal(node.right, items);
    items.push(node.value)
  }

  public isLeaf(node: Node<T>): boolean {
    return node.left == null && node.right == null;
  }

  public height(): number {
    return this.heightInternal(this.root);
  }

  private heightInternal(node: NodeOrNull<T>): number {
    if (node == null) {
      return -1;
    }
    if (this.isLeaf(node)) {
      return 0;
    }

    return 1 + Math.max(this.heightInternal(node.left), this.heightInternal(node.right))
  }

  public minValue(): T {
    if (this.isEmpty()) {
      throw new Error(Errors.IllegalArgumentException)
    }
    return this.minValueInternal(this.root!);

  }

  private minValueInternal(root: Node<T>): T {
    if (root.left == null) return root.value;
    return this.minValueInternal(root.left);
  }

  public equals(other: BinaryTree<T>) {
    if (other == null) {
      return false;
    }

    return this.equalsInternal(this.root, other.root);
  }

  private equalsInternal(first: NodeOrNull<T>, second: NodeOrNull<T>): boolean {
    if (first == null && second == null) return true;
    if (first != null && second != null) {
      return first.value === second.value
        && this.equalsInternal(first.left, second.left)
        && this.equalsInternal(first.right, second.right)
    }
    return false;
  }

  public getNodesAtDistance(distance: number) {
    const nodes: T[] = [];

    return this.getNodesAtDistanceInternal(this.root, distance, nodes);
  }

  private getNodesAtDistanceInternal(root: NodeOrNull<T>, distance: number, list: T[]) {
    if (root == null) return list;
    if (distance == 0) {
      list.push(root.value)
    }

    this.getNodesAtDistanceInternal(root.left, distance - 1, list);
    this.getNodesAtDistanceInternal(root.right, distance -1, list);

    return list;
  }

  public traverseLevelOrder() {
    const items: T[] = []
    for (let i = 0; i <= this.height(); i++) {
      for (let value of this.getNodesAtDistance(i)) {
        items.push(value);
      }
    }

    return items;
  }

}