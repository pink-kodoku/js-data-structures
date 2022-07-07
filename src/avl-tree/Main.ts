import {AVLTree} from "./AVLTree";

const avlTree = new AVLTree()

avlTree.insert(10)
avlTree.insert(20)
avlTree.insert(30)

console.log(avlTree.root)
console.log(avlTree.root!.leftChild)
console.log(avlTree.root!.rightChild)