import { JDatomClasses, JDbox, JDphotoFrame, JDtypho } from "@janda-com/front";
import {
    IDiv,
    JDatomExtentionSet,
    TElements,
} from "@janda-com/front/dist/types/interface";
import React from "react";
import classNames from "classnames";
import { isEmpty } from "lodash";

const emptyImg = {
    small: "/img/nodata--small.png",
    large: "/img/nodata--big.png",
};

interface IProp extends IDiv, JDatomExtentionSet {
    empty?: boolean | any;
    msg?: TElements;
    mode?: "plain";
    size?: keyof typeof emptyImg;
}

export const Empty: React.FC<IProp> = ({
    className,
    mode = "plain",
    msg = "데이터가 없습니다",
    empty = true,
    children,
    mb,
    mr,
    hide,
    size = "small",
}) => {
    if (typeof window === "undefined") return null;
    const classes = classNames("empty", className, {
        "empty--plain": mode === "plain",
        ...JDatomClasses({ hide, mb, mr }),
    });
    console.log(classes);

    const isBig = size === "large";

    if (!isEmpty(empty)) return null;
    if (children) return <div>{children}</div>;
    return (
        <JDbox className={classes}>
            <JDtypho
                color="grey3"
                flex={{ vCenter: true, center: true, column: isBig }}
            >
                <JDphotoFrame
                    style={isBig ? { width: "10rem" } : { width: "2.5rem" }}
                    mr
                    src={emptyImg[size]}
                />
                <div className="textTransformClear">{msg}</div>
            </JDtypho>
        </JDbox>
    );
};
