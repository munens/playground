"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
const node_is_not_a_child_error_1 = require("./errors/node-is-not-a-child-error");
const node_already_appended_error_1 = require("./errors/node-already-appended-error");
const node_cannot_append_itself_error_1 = require("./errors/node-cannot-append-itself-error");
const node_cannot_be_inserted_before_itself_error_1 = require("./errors/node-cannot-be-inserted-before-itself-error");
const node_cannot_be_inserted_after_itself_error_1 = require("./errors/node-cannot-be-inserted-after-itself-error");
class TreeNode {
    constructor(value) {
        this.value = value;
        this._children = [];
        this._parent = null;
    }
    get parent() {
        return this._parent;
    }
    get children() {
        return this._children;
    }
    hasChild(node) {
        return this._children.includes(node);
    }
    removeChild(treeNode) {
        const index = this._children.indexOf(treeNode);
        if (!this.hasChild(treeNode)) {
            throw new node_is_not_a_child_error_1.NodeIsNotAChildError(treeNode, this);
        }
        this._children.splice(index, 1);
        treeNode._parent = null;
    }
    insertBefore(treeNode, referenceTreeNode) {
        if (treeNode === referenceTreeNode) {
            throw new node_cannot_be_inserted_before_itself_error_1.NodeCannotBeInsertedBeforeItselfError(treeNode, referenceTreeNode);
        }
        if (!this._children.includes(referenceTreeNode)) {
            throw new node_is_not_a_child_error_1.NodeIsNotAChildError(treeNode, referenceTreeNode);
        }
        if (treeNode._parent) {
            treeNode._parent.removeChild(treeNode);
        }
        const siblingIndex = this._children.indexOf(referenceTreeNode);
        treeNode._parent = this;
        this._children.splice(siblingIndex, 0, treeNode);
    }
    insertAfter(treeNode, referenceTreeNode) {
        if (treeNode === referenceTreeNode) {
            throw new node_cannot_be_inserted_after_itself_error_1.NodeCannotBeInsertedAfterItselfError(treeNode, referenceTreeNode);
        }
        if (!this._children.includes(referenceTreeNode)) {
            throw new node_is_not_a_child_error_1.NodeIsNotAChildError(treeNode, referenceTreeNode);
        }
        if (treeNode._parent) {
            treeNode._parent.removeChild(treeNode);
        }
        const siblingIndex = this._children.indexOf(referenceTreeNode);
        treeNode._parent = this;
        this._children.splice(siblingIndex + 1, 0, treeNode);
    }
    appendChild(treeNode) {
        if (this.hasChild(treeNode)) {
            throw new node_already_appended_error_1.NodeAlreadyAppendedError(this, treeNode);
        }
        else if (treeNode === this) {
            throw new node_cannot_append_itself_error_1.NodeCannotAppendItselfError(this, treeNode);
        }
        else {
            if (treeNode._parent) {
                treeNode._parent.removeChild(treeNode);
            }
            treeNode._parent = this;
            this._children.push(treeNode);
        }
    }
}
exports.TreeNode = TreeNode;
