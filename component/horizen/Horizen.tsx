import React from "react";
import classNames from "classnames";
import { IDiv } from "../../types/interface";
import { JDatomClasses, JDColor } from "@janda-com/front";
// import { bgColorClass } from "@janda-com/front/dist/utils/autoClasses";

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
        // ...bgColorClass(color)
    });

    const Margin = margin * 0.4;

    return (
        <div
            {...props}
            style={{
                margin: Margin + "rem",
                marginLeft: 0,
                marginRight: 0,
                // backgroundColor: color,
                height,
                borderRadius: br,
                ...style,
            }}
            className={classes}
        />
    );
};

export default Horizen;

// interface IVertical extends IDiv {
//     margin: number;
//     height: number;

// }
// export const Vertical: React.FC<IVertical> = ({ margin, height, className, ...props }) => {
//     const classes = classNames('JDvertical', className, {
//         ...JDatomClasses(props)
//     })

//     const Height = height * 0.4;
//     const Margin = margin * 0.4;

//     return <div {...props} style={{
//         height: Height + "rem",
//         margin: Margin + "rem",
//         marginTop: 0,
//         marginBottom: 0
//     }} className={classes} />
// }
