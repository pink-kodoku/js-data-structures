import {BinaryTree} from "./BinaryTree";


const binaryTree = new BinaryTree()

binaryTree.insert(20)
binaryTree.insert(10)
binaryTree.insert(30)
binaryTree.insert(5)
binaryTree.insert(3)
binaryTree.insert(40)

console.log(binaryTree.inOrderTraverse())
