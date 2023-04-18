"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeIsNotAChildError = void 0;
const tianxia_error_1 = require("./tianxia-error");
class NodeIsNotAChildError extends tianxia_error_1.TianxiaError {
    constructor(node, referenceNode) {
        super('Given node not present among children.');
        this.node = node;
        this.referenceNode = referenceNode;
    }
}
exports.NodeIsNotAChildError = NodeIsNotAChildError;
