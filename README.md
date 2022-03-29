# async-button

> Button with asynchronous onClick

[![NPM](https://img.shields.io/npm/v/async-button.svg)](https://www.npmjs.com/package/async-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
                onClick={callback}
                // Optional
                callOnMount={true}
                // Optional
                allowOnlyOnce={true}
            />
        );
    }
}
```
