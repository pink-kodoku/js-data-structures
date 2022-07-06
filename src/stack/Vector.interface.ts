export interface Vector<T> {
  push(value: T): void;
  pop(): T;
  peek(): T;
  size(): number;
  isEmpty(): boolean;

}