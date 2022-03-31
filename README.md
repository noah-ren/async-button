# async-button

> Button with asynchronous onClick

[![NPM](https://img.shields.io/npm/v/async-button.svg)](https://www.npmjs.com/package/async-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<img src="https://user-images.githubusercontent.com/2221955/160962137-0d72b185-67a1-4304-a9fd-1d2f19ebce5a.gif" width="400px" />

## Install

```bash
npm install --save async-button
```

```bash
yarn add async-button
```

## Usage

```tsx
import React, { Component } from "react";

import { AsyncButton } from "async-button";

export const callback = async (): Promise<void> => {
    return new Promise<void>((resolve) => setTimeout(resolve, 4 * 1000));
};

class Example extends Component {
    render() {
        return (
            <AsyncButton
                // The asynchronous callback.
                onClick={callback}
                // (optional) Whether the onClick should be called automatically.
                callOnMount={true}
                // (optional) Disable the button after onClick has been succesfully called.
                allowOnlyOnce={true}
            />
        );
    }
}
```
