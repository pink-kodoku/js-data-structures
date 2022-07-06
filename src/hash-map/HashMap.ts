import HashMapInterface from "./HashMap.interface";
import LinkedList from "../linked-list/LinkedList";
import {Errors} from "../errors/errors.enum";

class Entry<K, V> {
  constructor(public key: K, public value: V) {
  }
}

export default class HashMap<K, V> implements HashMapInterface<K, V> {
  private readonly DEFAULT_INITIAL_CAPACITY = 4;
  private readonly DEFAULT_LOAD_FACTOR = 0.75;
  private threshold = this.DEFAULT_INITIAL_CAPACITY * this.DEFAULT_LOAD_FACTOR;
  private items: LinkedList<Entry<K, V>>[] = [];

  get(key: K): V | null {
    let entry = this.getEntry(key);

    return entry == null ? null : entry.value;
  }

  private isThreshold() {
    return this.threshold < this.items.length;
  }

  put(key: K, value: V): void {
    if (this.isThreshold()) {
      this.threshold = Math.round(this.items.length / 0.75 + 1);
    }
    let entry = this.getEntry(key);
    if (entry != null) {
      entry.value = value;
      return;
    }

    this.getOrCreateBucket(key).addLast(new Entry<K, V>(key, value));
  }

  remove(key: K): V {
    let entry = this.getEntry(key);
    if (entry == null) {
      throw new Error(Errors.IllegalStateException);
    }

    this.getBucket(key).remove(entry);
    return entry.value;
  }

  private getEntry(key: K): Entry<K, V> | null {
    let bucket = this.getBucket(key);
    if (bucket == null) {
      return null;
    }

    for (let entry of bucket) {
      if (entry.key === key) {
        return entry;
      }
    }

    return null;
  }

  private getBucket(key: K): LinkedList<Entry<K, V>> {
    return this.items[this.hash(key)];
  }

  private hash(key: K): number {
    let string = String(key);
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      let code = string.charCodeAt(i);
      hash = ((hash << 5) - hash) + code;
      hash = hash & hash;
    }
    return hash % this.threshold;
  }

  private getOrCreateBucket(key: K): LinkedList<Entry<K, V>> {
    let index = this.hash(key);
    let bucket = this.items[index];
    if (bucket == null) {
      this.items[index] = new LinkedList<Entry<K, V>>();
    }

    return this.items[index];
  }
}