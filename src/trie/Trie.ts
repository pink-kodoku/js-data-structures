class Node_ {
  public value: string;
  public children: Map<String, Node_> = new Map<String, Node_>();
  public isEndOfWord: boolean = false;

  constructor(value: string) {
    this.value = value;
  }

  toString() {
    return this.value;
  }

  public hashChild(ch: string) {
    return this.children.has(ch);
  }

  public addChild(ch: string) {
    this.children.set(ch, new Node_(ch))
  }

  public getChild(ch: string) {
    return this.children.get(ch);
  }

  public getChildren() {
    return this.children.values()
  }

  public hasChildren() {
    return this.children.size !== 0;
  }

  public removeChild(ch: string) {
    this.children.delete(ch);
  }
}


export class Trie {
  private root: Node_ = new Node_(' ');

  public insert(word: string) {
    let current = this.root;
    for (let ch of word) {
      if (!current.hashChild(ch)) {
        current.addChild(ch);
      }
      current = current.getChild(ch)!;
    }
    current.isEndOfWord = true;
  }

  public contains(word: string) {
    if (word == null) {
      return false;
    }

    let current = this.root;
    for (let ch of word) {
      if (!current.hashChild(ch)) {
        return false;
      }
      current = current.getChild(ch)!;
    }
    return current.isEndOfWord;
  }

  public traverse() {
    const values: string[] = []
    this.traverseInternal(this.root, values);

    return values;
  }

  private traverseInternal(root: Node_, values: string[]) {
    for (let child of root.getChildren()) {
      this.traverseInternal(child, values);
    }
    values.push(root.value);
  }

  public remove(word: string) {
    if (word == null) return;

    this.removeInternal(this.root, word, 0)
  }

  private removeInternal(root: Node_, word: string, index: number) {
    if (index == word.length) {
      root.isEndOfWord = false;
      return;
    }

    let ch = word.charAt(index);
    let child = root.getChild(ch);
    if (child == null) return;

    this.removeInternal(child, word, index + 1);

    if (!child.hasChildren() && !child.isEndOfWord) {
      root.removeChild(ch);
    }
  }

  public findWords(prefix: string) {
    let words: string[] = [];
    let lastNode = this.findLastNodeOf(prefix);
    this.findWordsInternal(lastNode, prefix, words);

    return words;
  }

  private findWordsInternal(root: Node_ | null, prefix: string, words: string[]) {
    if (root == null) return;

    if (root.isEndOfWord) {
      words.push(prefix);
    }

    for (let child of root.getChildren()) {
      this.findWordsInternal(child, prefix + child.value, words)
    }
  }

  private findLastNodeOf(prefix: string) {
    if (prefix == null) return null;
    let current = this.root;
    for (let ch of prefix) {
      let child = current.getChild(ch);
      if (child == null) return null;
      current = child;
    }

    return current;
  }
}