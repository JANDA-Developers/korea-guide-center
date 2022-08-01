import { JDtypho } from "@janda-com/front";
import { IJDtyphoProp } from "@janda-com/front/dist/components/typho/Typho";
import React from "react";

interface IProp extends IJDtyphoProp {}

export const InfoBox: React.FC<IProp> = ({ className, children, ...props }) => {
    return (
        <JDtypho className={`infoBox ${className}`} {...props}>
            {children}
        </JDtypho>
    );
};
