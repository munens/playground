"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeCannotBeInsertedBeforeItselfError = void 0;
const tianxia_error_1 = require("./tianxia-error");
class NodeCannotBeInsertedBeforeItselfError extends tianxia_error_1.TianxiaError {
    constructor(node, referenceNode) {
        super('Node cannot be inserted before itself');
        this.node = node;
        this.referenceNode = referenceNode;
    }
}
exports.NodeCannotBeInsertedBeforeItselfError = NodeCannotBeInsertedBeforeItselfError;
