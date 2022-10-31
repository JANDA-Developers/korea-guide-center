import React from "react";
import classNames from "classnames";
import { IDiv } from "../../types/interface";
import { JDatomClasses, JDColor } from "@janda-com/front";

interface IHorizen extends IDiv {
    margin: number;
    color?: JDColor;
    br?: number;
    height?: number;
}
export const Horizen: React.FC<IHorizen> = ({
    margin,
    className,
    style,
    color,
    height,
    br,
    ...props
}) => {
    const classes = classNames("JDhorizen", className, {
        ...JDatomClasses(props),
    });

    const Margin = margin * 0.4;

    return (
        <div
            {...props}
            style={{
                margin: Margin + "rem",
                marginLeft: 0,
                marginRight: 0,
                height,
                borderRadius: br,
                ...style,
            }}
            className={classes}
        />
    );
};

export default Horizen;
