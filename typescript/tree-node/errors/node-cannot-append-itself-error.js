"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeCannotAppendItselfError = void 0;
const tianxia_error_1 = require("./tianxia-error");
class NodeCannotAppendItselfError extends tianxia_error_1.TianxiaError {
    constructor(parentNode, childNode) {
        super('Cannot append to the node itself.');
        this.parentNode = parentNode;
        this.childNode = childNode;
    }
}
exports.NodeCannotAppendItselfError = NodeCannotAppendItselfError;
