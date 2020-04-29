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

    private constructor(listener: ListenerFunction) {

        this._listener = listener;
    }

    public active() {


    }

    private _activeListener() {

        window.addEventListener('unload', this._listener);
    }
}
