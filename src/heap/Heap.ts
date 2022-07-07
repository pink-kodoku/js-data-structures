import {Errors} from "../errors/errors.enum";


export class Heap<T> {
  private items: T[] = new Array(10);
  private size: number = 0;

  public insert(value: T) {
    if (this.isFull()) {
      throw new Error(Errors.IllegalStateException)
    }
    this.items[this.size++] = value;
    this.bubbleUp();
  }


  public isEmpty() {
    return this.size === 0;
  }

  private bubbleUp() {
    let index = this.size - 1;
    while (index > 0 && this.items[index] > this.items[this.parentIndex(index)]) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }

  public remove() {
    if (this.isEmpty()) {
      throw new Error(Errors.IllegalStateException);
    }

    let root = this.items[0];
    this.items[0] = this.items[--this.size]

    this.bubbleDown();

    return root;
  }

  private bubbleDown() {
    let index = 0;
    while (index <= this.size && !this.isValidParent(index)) {
      let largerChildIndex = this.largerChildIndex(index);
      this.swap(index, largerChildIndex);
      index = largerChildIndex;
    }
  }

  private largerChildIndex(index: number) {
    if (!this.hasLeftChild(index)) return index;
    if (!this.hasRightChild(index)) return this.leftChildIndex(index);

    return this.leftChild(index) > this.rightChild(index)
      ? this.leftChildIndex(index) : this.rightChildIndex(index)
  }

  private isValidParent(index: number) {
    if (!this.hasLeftChild(index)) {
      return true;
    }

    let isValid = this.items[index] >= this.leftChild(index);
    if (this.hasRightChild(index)) {
      isValid = isValid && this.items[index] >= this.rightChild(index);
    }

    return isValid;
  }

  private hasLeftChild(index: number) {
    return this.leftChildIndex(index) <= this.size;
  }

  private hasRightChild(index: number) {
    return this.rightChildIndex(index) <= this.size;
  }

  public isFull() {
    return this.size === this.items.length;
  }

  private leftChild(index: number) {
    return this.items[this.leftChildIndex(index)]
  }

  private rightChild(index: number) {
    return this.items[this.rightChildIndex(index)]
  }

  private parent(index: number) {
    return this.parentIndex(index);
  }

  private parentIndex(index: number) {
    return (index - 1) / 2;
  }

  private leftChildIndex(index: number) {
    return index * 2 + 1;
  }

  private rightChildIndex(index: number) {
    return index * 2 + 2;
  }

  private swap(firstIndex: number, secondIndex: number) {
    let temp = this.items[firstIndex];
    this.items[firstIndex] = this.items[secondIndex];
    this.items[secondIndex] = temp;
  }

  public max() {
    if (this.isEmpty()) {
      throw new Error(Errors.IllegalStateException);
    }
    return this.items[0];
  }

}