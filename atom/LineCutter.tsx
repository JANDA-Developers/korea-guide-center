import { JDtypho } from "@janda-com/front";
import { IJDtyphoProp } from "@janda-com/front/dist/components/typho/Typho";
import React from "react";

interface IProp extends IJDtyphoProp {
    line?: number;
    lineFix?: boolean;
}

export const LineCutter: React.FC<IProp> = ({ line, lineFix, ...props }) => {
    let lineFixStyle = {};

    const lineHeight = 1.4;
    if (lineFix && line) {
        lineFixStyle = {
            minHeight: lineHeight * line + "em",
        };
    }
    return (
        <JDtypho
            style={{
                lineClamp: line,
                WebkitLineClamp: line,
                display: "-webkit-box",
                ...lineFixStyle,
            }}
            className="lineCutter"
            {...props}
        />
    );
};
