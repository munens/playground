import {NodeIsNotAChildError} from './errors/node-is-not-a-child-error';
import {NodeAlreadyAppendedError} from './errors/node-already-appended-error';
import {NodeCannotAppendItselfError} from './errors/node-cannot-append-itself-error';
import {NodeCannotBeInsertedBeforeItselfError} from './errors/node-cannot-be-inserted-before-itself-error';
import {NodeCannotBeInsertedAfterItselfError} from './errors/node-cannot-be-inserted-after-itself-error';

export class TreeNode<T> {

    protected readonly _children: Array<TreeNode<T>> = [];
    protected _parent: TreeNode<T> | null = null;

    get parent(): TreeNode<T> | null {
        return this._parent;
    }

    get children(): ReadonlyArray<TreeNode<T>> {
        return this._children;
    }

    constructor(readonly value: T) {}

    hasChild(node: TreeNode<T>): boolean {
        return this._children.includes(node);
    }

    removeChild(treeNode: TreeNode<T>): void {
        const index = this._children.indexOf(treeNode);

        if (!this.hasChild(treeNode)) {
            throw new NodeIsNotAChildError(treeNode, this);
        }

        this._children.splice(index, 1);
        treeNode._parent = null;
    }

    insertBefore(treeNode: TreeNode<T>, referenceTreeNode: TreeNode<T>): void {
        if (treeNode === referenceTreeNode) {
            throw new NodeCannotBeInsertedBeforeItselfError(treeNode, referenceTreeNode);
        }

        if (!this._children.includes(referenceTreeNode)) {
            throw new NodeIsNotAChildError(treeNode, referenceTreeNode);
        }

        if (treeNode._parent) {
            treeNode._parent.removeChild(treeNode);
        }

        const siblingIndex = this._children.indexOf(referenceTreeNode);

        treeNode._parent = this;
        this._children.splice(siblingIndex, 0, treeNode);
    }

    insertAfter(treeNode: TreeNode<T>, referenceTreeNode: TreeNode<T>): void {
        if (treeNode === referenceTreeNode) {
            throw new NodeCannotBeInsertedAfterItselfError(treeNode, referenceTreeNode);
        }

        if (!this._children.includes(referenceTreeNode)) {
            throw new NodeIsNotAChildError(treeNode, referenceTreeNode);
        }

        if (treeNode._parent) {
            treeNode._parent.removeChild(treeNode);
        }

        const siblingIndex = this._children.indexOf(referenceTreeNode);

        treeNode._parent = this;
        this._children.splice(siblingIndex + 1, 0, treeNode);
    }

    appendChild(treeNode: TreeNode<T>): void {
        if (this.hasChild(treeNode)) {
            throw new NodeAlreadyAppendedError(this, treeNode);
        } else if (treeNode === this) {
            throw new NodeCannotAppendItselfError(this, treeNode);
        } else {
            if (treeNode._parent) {
                treeNode._parent.removeChild(treeNode);
            }
            treeNode._parent = this;
            this._children.push(treeNode);
        }
    }

}
