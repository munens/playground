import { TreeNode } from "./tree-node";

class Animal {
  constructor(private legs: number = 4) {}
}

const animal1 = new Animal(2);
const treeNode1 = new TreeNode(animal1);

const animal2 = new Animal(4);
const treeNode2 = new TreeNode(animal2);

console.log(treeNode1.hasChild(treeNode2))
