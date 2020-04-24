/**
 * @author WMXPY
 * @namespace Listener
 * @description Before Unload
 */

import { MessageExecuter, parseMessageExecuter } from "./declare";

export class BeforeUnloadListener {

    public static create(initialMessage?: MessageExecuter): BeforeUnloadListener {

        return new BeforeUnloadListener(initialMessage);
    }

    private static _listened: boolean;

    private _message?: MessageExecuter;
    private _activated: boolean;

    private constructor(initialMessage?: MessageExecuter) {

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

    public attemptActive(): this {

        if (BeforeUnloadListener._listened) {
            return this;
        }
        if (this._activated) {
            return this;
        }

        return this._activeListener();
    }

    public active(): this {

        if (BeforeUnloadListener._listened) {
            throw new Error('[BWNL-Listener] Another BeforeUnload Listener is already activated');
        }
        if (this._activated) {
            throw new Error('[BWNL-Listener] This BeforeUnload Listener is already activated');
        }

        return this._activeListener();
    }

    public attemptRelease(): this {

        if (!BeforeUnloadListener._listened) {
            return this;
        }
        if (!this._activated) {
            return this;
        }

        return this._releaseListener();
    }

    public release(): this {

        if (!BeforeUnloadListener._listened) {
            throw new Error('[BWNL-Listener] Nothing To Release');
        }
        if (!this._activated) {
            throw new Error('[BWNL-Listener] Nothing To Release');
        }

        return this._releaseListener();
    }

    private _activeListener(): this {

        BeforeUnloadListener._listened = true;
        this._activated = true;
        window.addEventListener('beforeunload', this._beforeUnloadFunction);
        return this;
    }

    private _releaseListener(): this {

        BeforeUnloadListener._listened = false;
        this._activated = false;
        window.removeEventListener('beforeunload', this._beforeUnloadFunction);
        return this;
    }

    private _beforeUnloadFunction(event: BeforeUnloadEvent): string | undefined {

        event.preventDefault();
        event.returnValue = this._message;

        const message: string | undefined = parseMessageExecuter(this._message);

        return message;
    }
}
