/**
 * @author WMXPY
 * @namespace Listener
 * @description Before Unload
 * @override Story
 */

import * as React from 'react';
import { BeforeUnloadListener } from "../src";

// tslint:disable-next-line: no-default-export
export default {
    title: 'Before Unload',
};

const dynamicBeforeUnload: BeforeUnloadListener = BeforeUnloadListener.create();
const fallbackBeforeUnload: BeforeUnloadListener = BeforeUnloadListener.create();

export const Dynamic: React.SFC = () => {

    return (<div>
        <button
            onClick={dynamicBeforeUnload.active}
        >Active</button>
        <button
            onClick={dynamicBeforeUnload.release}
        >Release</button>
    </div>);
};

export const ClipboardAPI: React.SFC = () => {

    return (<div>
        <button
            onClick={fallbackBeforeUnload.active}
        >Active</button>
        <button
            onClick={fallbackBeforeUnload.release}
        >Release</button>
    </div>);
};
