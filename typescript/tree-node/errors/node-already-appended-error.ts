import {TianxiaError} from './tianxia-error';
import {TreeNode} from '../tree-node';

export class NodeAlreadyAppendedError<T = unknown> extends TianxiaError {
    constructor(
        readonly parentNode: TreeNode<T>,
        readonly childNode: TreeNode<T>
    ) {
        super('Node already appended as child.');
    }
}
