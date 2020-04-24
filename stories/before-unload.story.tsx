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

const dynamicBeforeUnload: BeforeUnloadListener = BeforeUnloadListener.create('Dynamic');

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
