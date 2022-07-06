export interface QueueInterface<T> {
  enqueue(value: T): void;
  dequeue(): T;
  isEmpty(): boolean;
  size(): number;
  peek(): T;
}