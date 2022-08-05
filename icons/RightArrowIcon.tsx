import React from "react";

function RightArrowIcon(props: React.SVGProps<
    SVGSVGElement
> & { title?: string }) {
    return (
        <svg
            width="40"
            height="40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 5l7 7-7 7"
            />
        </svg>
    )
}

export default React.memo(RightArrowIcon);