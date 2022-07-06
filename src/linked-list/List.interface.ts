export default interface List<T> {
  addFirst(value: T): void;
  addLast(value: T): void;
  size(): number;
  isEmpty(): boolean;
  contains(value: T): boolean;
  toArray(): T[];
  clear(): void;
}