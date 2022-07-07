import {Trie} from "./Trie";

let trie = new Trie();

trie.insert("cat")
trie.insert("care")
trie.insert("careful")
trie.insert("category")

console.log(trie.findWords("car"))


