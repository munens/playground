import {TianxiaError} from './tianxia-error';
import {TreeNode} from '../tree-node';

export class NodeCannotBeInsertedBeforeItselfError<T = unknown> extends TianxiaError {
    constructor(
        readonly node: TreeNode<T>,
        readonly referenceNode: TreeNode<T>,
    ) {
        super('Node cannot be inserted before itself');
    }
}
