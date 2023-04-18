import {TianxiaError} from './tianxia-error';
import {TreeNode} from '../tree-node';

export class NodeIsNotAChildError<T = unknown> extends TianxiaError {
    constructor(
        readonly node: TreeNode<T>,
        readonly referenceNode: TreeNode<T>
    ) {
        super('Given node not present among children.');
    }
}
