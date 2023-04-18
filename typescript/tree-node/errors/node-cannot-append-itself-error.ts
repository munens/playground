import {TianxiaError} from './tianxia-error';
import {TreeNode} from '../tree-node';

export class NodeCannotAppendItselfError<T = unknown> extends TianxiaError {
    constructor(
        readonly parentNode: TreeNode<T>,
        readonly childNode: TreeNode<T>
    ) {
        super('Cannot append to the node itself.');
    }
}
