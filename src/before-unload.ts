/**
 * @author WMXPY
 * @namespace Listener
 * @description Before Unload
 */

export class BeforeUnloadListener {

    public static create(initialMessage: string): BeforeUnloadListener {

        return new BeforeUnloadListener(initialMessage);
    }

    private static _listened: boolean;

    private _message: string;
    private _activated: boolean;

    private constructor(initialMessage: string) {

        this._message = initialMessage;
        this._activated = false;

        this.active = this.active.bind(this);
        this.release = this.release.bind(this);

        this._beforeUnloadFunction = this._beforeUnloadFunction.bind(this);
    }

    public setMessage(message: string): this {

        this._message = message;
        return this;
    }

    public active(): this {

        if (BeforeUnloadListener._listened) {

            throw new Error('[BWNL-Listener] Another BeforeUnload Listener is already activated');
        }

        if (this._activated) {

            console.warn('[BWNL-Listener] This Listener is already activated');
            return this;
        }

        BeforeUnloadListener._listened = true;
        this._activated = true;
        window.addEventListener('beforeunload', this._beforeUnloadFunction);
        return this;
    }

    public release(): this {

        if (!BeforeUnloadListener._listened) {

            return this;
        }

        if (!this._activated) {
            return this;
        }

        BeforeUnloadListener._listened = false;
        this._activated = false;
        window.removeEventListener('beforeunload', this._beforeUnloadFunction);
        return this;
    }

    private _beforeUnloadFunction(event: BeforeUnloadEvent): string {

        event.preventDefault();
        event.returnValue = this._message;

        return this._message;
    }
}
