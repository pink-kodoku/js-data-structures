export default interface HashMapInterface<K, V> {
  put(key: K, value: V): void;
  get(key: K): V | null;
  remove(key: K): V;
}