export type TianxiaErrorCause = unknown;

export abstract class TianxiaError extends Error {

    constructor(message: string, readonly cause?: TianxiaErrorCause) {
        super(message);
    }

}
