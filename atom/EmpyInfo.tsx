import {
    JDatomClasses,
    JDbox,
    JDtypho,
    JDalign,
    Small,
    JDicon,
} from "@janda-com/front";
import React from "react";
import classNames from "classnames";
import { JDatomExtentionSet } from "@janda-com/front/dist/types/interface";
import { IDiv, TElements } from "../types/interface";

interface IProp extends IDiv, JDatomExtentionSet {
    empty?: boolean | any;
    msg?: TElements;
    padding?: number;
}

export const EmptyInfo: React.FC<IProp> = ({
    className,
    msg = "데이터가 없습니다.",
    empty = true,
    mb,
    mr,
    hide,
    padding,
    ...props
}) => {
    if (typeof window === "undefined") return null;
    const classes = classNames("emptyInfo", className, {
        ...JDatomClasses({ hide, mb, mr }),
    });

    if (!empty) return null;

    return (
        <JDalign
            style={{
                padding: padding ? `${padding}rem` : undefined,
            }}
            className={classes}
            {...props}
        >
            <JDtypho
                color="grey3"
                flex={{ vCenter: true, center: true, column: true }}
            >
                <JDicon mb color="grey2" size="huge" icon="info" />
                <Small>{msg}</Small>
            </JDtypho>
        </JDalign>
    );
};
