import List from "./List.interface";
import {Errors} from "../errors/errors.enum";

class Node<T> {
  public value: T;
  public next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }

  toString() {
    return this.value;
  }
}

export default class LinkedList<T> implements List<T> {
  private _first: Node<T> | null = null;
  private _last: Node<T> | null = null;
  private _size: number = 0;

  private initialize(node: Node<T>) {
    this._last = this._first = node;
    this._size++;
  }

  public addFirst(value: T): void {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.initialize(node);
      return;
    }

    node.next = this._first;
    this._first = node;
    this._size++;
  }

  public addLast(value: T): void {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.initialize(node);
      return;
    }

    let current = this._first!;
    while (current.next != null) {
      current = current.next;
    }

    current.next = node;
    this._last = node;
    this._size++;
  }

  public removeFirst(): T {
    if (this.isEmpty()) {
      throw new Error(Errors.IllegalStateException);
    }

    let removedValue = this._first!.value;

    const next = this._first!.next;
    this._first!.next = null;
    this._first = next;
    this._size--;

    return removedValue;
  }

  public removeLast(): T {
    if (this.isEmpty()) {
      throw new Error(Errors.IllegalStateException);
    }

    let removedValue = this._last!.value;

    let current = this._first!;
    let prev: Node<T> = current;
    while (current.next != null) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
    this._last = prev;
    this._size--;

    return removedValue;
  }

  public remove(value: T): T {
    if (this.isEmpty()) {
      throw new Error(Errors.IllegalStateException);
    }

    if (this._first!.value === value) {
      return this.removeFirst();
    }

    if (this._last!.value === value) {
      return this.removeLast();
    }

    let removedValue: T;

    let current = this._first!;
    let prev = current;

    while (current.next != null) {
      if (value === current.value) {
        break;
      }
      prev = current;
      current = current.next;
    }

    let next = current.next;
    removedValue = current.value;
    current.next = null;
    prev.next = next;
    this._size--;

    return removedValue;
  }

  public clear(): void {
    this._size = 0;
    this._first = this._last = null;
  }

  public contains(value: T): boolean {
    if (this.isEmpty()) {
      return false;
    }

    let current = this._first;
    while (current != null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  public isEmpty(): boolean {
    return this._size === 0;
  }

  public toArray(): T[] {
    if (this.isEmpty()) {
      return [];
    }
    let newArr: T[] = [];
    let current = this._first;
    let i = 0;
    while (current != null) {
      newArr[i++] = current.value;
      current = current.next;
    }

    return newArr;
  }


  public size() {
    return this._size;
  }

  public reverse(): void {
    if (this.isEmpty()) {
      return;
    }
    let tempFirst = this._first!;
    let current = this._first!;
    let next = this._first!.next;

    this._first!.next = null;
    this._first = this._last;
    this._last = tempFirst;
    this._last.next = null;

    while (next != null) {
      let temp = next.next;
      next.next = current;
      current = next;
      next = temp;
    }

    this._first = current;
  }

  [Symbol.iterator]() {
    let index = -1;
    let data = this.toArray();

    return {
      next: () => ({value: data[++index], done: index > data.length - 1})
    };
  };

}