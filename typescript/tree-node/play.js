"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tree_node_1 = require("./tree-node");
class Animal {
    constructor(legs = 4) {
        this.legs = legs;
    }
}
const animal1 = new Animal(2);
const treeNode1 = new tree_node_1.TreeNode(animal1);
const animal2 = new Animal(4);
const treeNode2 = new tree_node_1.TreeNode(animal2);
console.log(treeNode1.hasChild(treeNode2));
