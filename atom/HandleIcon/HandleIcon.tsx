import { IDiv } from "@janda-com/front/dist/types/interface";
import React from "react";
import { IIcons } from "../../component/icons/declation";
import { ICONPROP, JDicon } from "../../component/icons/Icons";

interface IProp extends IDiv {
    icon: IIcons;
    iconProp?: ICONPROP;
    hide?: boolean;
}

export const HandleIcon: React.FC<IProp> = ({
    hide,
    icon,
    iconProp,
    className,
    ...props
}) => {
    return (
        <div {...props} className={`handleIcon ${className}`}>
            <JDicon icon={icon} {...iconProp} />
        </div>
    );
};
