"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeAlreadyAppendedError = void 0;
const tianxia_error_1 = require("./tianxia-error");
class NodeAlreadyAppendedError extends tianxia_error_1.TianxiaError {
    constructor(parentNode, childNode) {
        super('Node already appended as child.');
        this.parentNode = parentNode;
        this.childNode = childNode;
    }
}
exports.NodeAlreadyAppendedError = NodeAlreadyAppendedError;
