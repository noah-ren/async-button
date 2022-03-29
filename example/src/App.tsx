import React from "react";

import { AsyncButton } from "async-button";
import "async-button/dist/index.css";

export const callback = async (): Promise<void> => {
    return new Promise<void>((resolve) => setTimeout(resolve, 4 * 1000));
};

export const errorCallback = async (): Promise<void> => {
    return new Promise<void>((_resolve, reject) =>
        setTimeout(
            () =>
                reject(
                    new Error(
                        "Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://example.com. (Reason: CORS request did not succeed). Status code: (null).",
                    ),
                ),
            4 * 1000,
        ),
    );
};

const App = () => {
    return (
        <div>
            <p>
                Standard button:{" "}
                <AsyncButton onClick={callback}>Click</AsyncButton>
            </p>
            <p>
                Only-once button:{" "}
                <AsyncButton onClick={callback} allowOnlyOnce={true}>
                    Click
                </AsyncButton>
            </p>
            <p>
                Error button:{" "}
                <AsyncButton onClick={errorCallback}>Click</AsyncButton>
            </p>
        </div>
    );
};

export default App;
