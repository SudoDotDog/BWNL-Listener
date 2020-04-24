/**
 * @author WMXPY
 * @namespace Listener
 * @description Before Unload
 */

export class BeforeUnloadListener {

    public static create(initialMessage: string): BeforeUnloadListener {

        return new BeforeUnloadListener(initialMessage);
    }

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

        if (this._activated) {
            return this;
        }

        this._activated = true;
        window.addEventListener('beforeunload', this._beforeUnloadFunction);
        return this;
    }

    public release(): this {

        if (!this._activated) {
            return this;
        }

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
