import {Vector} from "./Vector.interface";

export default class Stack<T> implements Vector<T> {
  private _items: T[] = [];
  private _size: number = 0;

  isEmpty(): boolean {
    return this._size === 0;
  }

  peek(): T {
    return this._items[this._size - 1];
  }

  pop(): T {
    return this._items[--this._size];
  }

  push(value: T): void {
    this._items[this._size++] = value;
  }

  size(): number {
    return this._size;
  }


}