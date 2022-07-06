import {QueueInterface} from "./Queue.interface";
import {Errors} from "../errors/errors.enum";

export default class Queue<T> implements QueueInterface<T> {
  private readonly _items: T[];
  private _size = 0;
  private _front = 0;
  private _rear = 0;

  public constructor(capacity: number) {
    this._items = new Array(capacity);
  }


  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error(Errors.IllegalStateException);
    }
    let removedItem = this._items[this._front];
    this._front = (this._front + 1) % this._items.length;
    this._size--;

    return removedItem;
  }

  enqueue(value: T): void {
    if (this.isFull()) {
      throw new Error(Errors.IllegalStateException);
    }
    this._items[this._rear] = value;
    this._rear = (this._rear + 1) % this._items.length;
    this._size++;
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  isFull(): boolean {
    return this._size === this._items.length;
  }

  peek(): T {
    return this._items[0];
  }

  size(): number {
    return this._size;
  }

  toArray(): T[] {
    if (this.isEmpty()) {
      return [];
    }
    let newArr = []
    for (let i = 0; i < this._size; i++) {
      newArr[i] = this._items[i];
    }

    return newArr;
  }

}