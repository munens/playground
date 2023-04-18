"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TianxiaError = void 0;
class TianxiaError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
    }
}
exports.TianxiaError = TianxiaError;
