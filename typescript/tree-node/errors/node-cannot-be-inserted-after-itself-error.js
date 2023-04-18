"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeCannotBeInsertedAfterItselfError = void 0;
const tianxia_error_1 = require("./tianxia-error");
class NodeCannotBeInsertedAfterItselfError extends tianxia_error_1.TianxiaError {
    constructor(node, referenceNode) {
        super('Node cannot be inserted after itself');
        this.node = node;
        this.referenceNode = referenceNode;
    }
}
exports.NodeCannotBeInsertedAfterItselfError = NodeCannotBeInsertedAfterItselfError;
