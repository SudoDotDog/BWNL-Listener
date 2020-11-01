# BWNL-Listener

[![Build Status](https://travis-ci.com/SudoDotDog/BWNL-Listener.svg?branch=master)](https://travis-ci.com/SudoDotDog/BWNL-Listener)
[![codecov](https://codecov.io/gh/SudoDotDog/BWNL-Listener/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/BWNL-Listener)
[![npm version](https://badge.fury.io/js/%40bwnl%2Flistener.svg)](https://www.npmjs.com/package/@bwnl/listener)
[![downloads](https://img.shields.io/npm/dm/@bwnl/listener.svg)](https://www.npmjs.com/package/@bwnl/listener)

:rabbit: Listener controller

## Install

```sh
npm install @bwnl/shiny-listener --save
# Or
yarn add @bwnl/shiny-listener
```

## Usage

```tsx
import { BeforeUnloadListener } from "@bwnl/listener";

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
```
