/**
 * @author WMXPY
 * @namespace Listener
 * @description Before Unload
 * @override Story
 */

import * as React from 'react';
import { BeforeUnloadListener } from "../src";

export default {
    title: 'Before Unload',
};

const dynamicBeforeUnload: BeforeUnloadListener = BeforeUnloadListener.create('Dynamic');

export const Dynamic: React.FC = () => {

    return (<div>
        <button
            onClick={dynamicBeforeUnload.active}
        >Active</button>
        <button
            onClick={dynamicBeforeUnload.release}
        >Release</button>
    </div>);
};
