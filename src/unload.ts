/**
 * @author WMXPY
 * @namespace Listener
 * @description Unload
 */

import { ListenerFunction } from "./declare";

export class UnloadListener {

    public static create(listener: ListenerFunction): UnloadListener {

        return new UnloadListener(listener);
    }

    private readonly _listener: ListenerFunction;

    private _activated: boolean;

    private constructor(listener: ListenerFunction) {

        this._listener = listener;
        this._activated = false;

        this.active = this.active.bind(this);
        this.release = this.release.bind(this);
    }

    public get listening(): boolean {
        return this._activated;
    }

    public attemptActive(): this {

        if (this._activated) {
            return this;
        }

        return this._activeListener();
    }

    public active(): this {

        if (this._activated) {
            throw new Error('[BWNL-Listener] This Unload Listener is already activated');
        }

        return this._activeListener();
    }

    public attemptRelease(): this {

        if (!this._activated) {
            return this;
        }

        return this._releaseListener();
    }

    public release(): this {

        if (!this._activated) {
            throw new Error('[BWNL-Listener] Nothing To Release');
        }

        return this._releaseListener();
    }

    private _activeListener(): this {

        this._activated = true;
        window.addEventListener('unload', this._listener);
        return this;
    }

    private _releaseListener(): this {

        this._activated = false;
        window.removeEventListener('unload', this._listener);
        return this;
    }
}
