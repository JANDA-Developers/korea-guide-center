import React from "react";
import { IDiv } from "../../types/interface";

interface IProp extends IDiv {}

export const Preloader: React.FC<IProp> = ({ ...props }) => {
    return (
        <div {...props} className={`itsPreloader ${props.className}`}>
            <svg width="100%" height="100%" viewBox="0 0 38 38">
                <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#D0101B" stopOpacity="0" />
                        <stop offset="1" stopColor="#D0101B" stopOpacity="1" />
                    </linearGradient>
                </defs>
                <path
                    stroke="url(#gradient)"
                    vectorEffect="non-scaling-stroke"
                    strokeWidth="2px"
                    fill="none"
                    fillRule="evenodd"
                    d="M2,19a17,17 0 1,1 34,0"
                />
                <path
                    stroke="#D0101B"
                    vectorEffect="non-scaling-stroke"
                    strokeWidth="2px"
                    fill="none"
                    fillRule="evenodd"
                    d="M2,19a17,17 0 1,0 34,0"
                />
            </svg>
        </div>
    );
};
