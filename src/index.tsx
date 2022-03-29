import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import ReactTooltip from "react-tooltip";
import { Info } from "./Info";

import { Spinner } from "./Spinner";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => Promise<any>;
    callOnMount?: boolean;
    allowOnlyOnce?: boolean;
}

export const AsyncButton = ({
    onClick,
    callOnMount,
    allowOnlyOnce,
    disabled,
    children,
    style,
    ...props
}: Props) => {
    const [calling, setCalling] = useState(false);
    const [callError, setCallError] = useState<Error>();
    const [done, setDone] = useState(false);

    // Here's how we'll keep track of our component's mounted state
    const componentIsMounted = useRef(true);
    useEffect(() => {
        return () => {
            componentIsMounted.current = false;
        };
    }, []);

    const onClickCallback = useCallback(async () => {
        setCalling(true);
        setCallError(undefined);
        try {
            await onClick();
            if (allowOnlyOnce && componentIsMounted.current) {
                setDone(true);
            }
        } catch (error) {
            if (componentIsMounted.current) {
                setCallError(error);
            }
            console.error(error);
        }
        if (componentIsMounted.current) {
            setCalling(false);
        }
    }, [onClick]);

    useEffect(() => {
        if (callOnMount && !disabled && !done && !calling && !callError) {
            setCalling(true);
            onClick();
        }
    }, [callOnMount, disabled, done, calling, onClick, callError]);

    return (
        <button
            className="async-button--button"
            onClick={onClickCallback}
            disabled={disabled || calling || done}
            title={callError?.message}
            style={{
                backgroundColor: "#eee",
                alignItems: "center",
                border: "none",
                borderRadius: "0.25rem",
                cursor: "pointer",
                display: "inline-flex",
                justifyContent: "center",
                outline: "none",
                padding: "0.5em 1em",
                transition: "transform 0.2s, -webkit-transform 0.2s",
                ...style,
            }}
            {...props}
        >
            {done ? <span>Done -&nbsp;</span> : null}
            <span style={{ display: callError ? "inline" : "none" }}>
                <span
                    style={{
                        color: "#c73c50",
                        fontWeight: 700,
                    }}
                    data-tip={callError?.message || "error"}
                >
                    Error <Info style={{ fill: "#c73c50" }} />
                </span>
                &nbsp;-&nbsp;
            </span>
            {calling ? <Spinner /> : null}
            <div>{children}</div>
            <ReactTooltip effect="solid" />
        </button>
    );
};
