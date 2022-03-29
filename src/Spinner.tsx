// The MIT License (MIT)

// Copyright (c) 2018 Mohan Pd.

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from "react";

export const Spinner = ({
    style,
    ...props
}: React.SVGProps<SVGSVGElement> = {}): JSX.Element => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            data-icon="puff"
            width="1em"
            height="1em"
            viewBox="0 0 44 44"
            stroke="currentColor"
            strokeWidth="5"
            style={{
                marginRight: 5,
                ...style,
            }}
            {...props}
        >
            <g fill="none" fillRule="evenodd">
                <circle cx="22" cy="22" r="1">
                    <animate
                        attributeName="r"
                        begin="0s"
                        calcMode="spline"
                        dur="1.8s"
                        keySplines="0.165, 0.84, 0.44, 1"
                        keyTimes="0; 1"
                        repeatCount="indefinite"
                        values="1; 20"
                    ></animate>
                    <animate
                        attributeName="stroke-opacity"
                        begin="0s"
                        calcMode="spline"
                        dur="1.8s"
                        keySplines="0.3, 0.61, 0.355, 1"
                        keyTimes="0; 1"
                        repeatCount="indefinite"
                        values="1; 0"
                    ></animate>
                </circle>
                <circle cx="22" cy="22" r="1">
                    <animate
                        attributeName="r"
                        begin="-0.9s"
                        calcMode="spline"
                        dur="1.8s"
                        keySplines="0.165, 0.84, 0.44, 1"
                        keyTimes="0; 1"
                        repeatCount="indefinite"
                        values="1; 20"
                    ></animate>
                    <animate
                        attributeName="stroke-opacity"
                        begin="-0.9s"
                        calcMode="spline"
                        dur="1.8s"
                        keySplines="0.3, 0.61, 0.355, 1"
                        keyTimes="0; 1"
                        repeatCount="indefinite"
                        values="1; 0"
                    ></animate>
                </circle>
            </g>
        </svg>
    );
};
