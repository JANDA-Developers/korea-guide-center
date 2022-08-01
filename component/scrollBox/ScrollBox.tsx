import { JDatomClasses } from "@janda-com/front";
import { IUl, JDatomExtentionSet } from "@janda-com/front/dist/types/interface";
import classNames from "classnames";
import React from "react";
import { checkMobile } from "../../utils/isMobile";

export interface IScrollBoxProps extends IUl, JDatomExtentionSet {
    scrollSize?: "small";
    height?: number;
    maxHeight?: number;
    components?: "ul";
    direction?: "horizen" | "vertical";
}

export const ScrollBox: React.FC<IScrollBoxProps> = ({
    children,
    direction,
    components,
    height,
    maxHeight,
    className,
    scrollSize,
    ...props
}) => {
    const classes = classNames("JDscrollBox", className, {
        "JDscrollBox--pc": !checkMobile(),
        "JDscrollBox--small": scrollSize === "small",
        "JDscrollBox--horizien": direction === "horizen",
        ...JDatomClasses(props),
    });

    const obj = {
        style: {
            height,
            maxHeight,
        },
        className: classes,
    };

    if (components === "ul") {
        return <ul {...obj}>{children}</ul>;
    }

    return <div {...obj}>{children}</div>;
};
