import {Trie} from "./Trie";


test('should return words that start with a particular prefix', () => {
  let trie = new Trie();

  trie.insert("cat")
  trie.insert("care")
  trie.insert("careful")

  expect(trie.findWords("car")).toEqual(["care", "careful"]);
});

test('should return true', () => {
  let trie = new Trie();

  trie.insert("cat")
  trie.insert("care")
  trie.insert("careful")

  expect(trie.contains("cat")).toEqual(true);
});

test('should return false', () => {
  let trie = new Trie();

  trie.insert("cat")
  trie.insert("care")
  trie.insert("careful")
  trie.remove("cat")

  expect(trie.contains("cat")).toEqual(false);
});
