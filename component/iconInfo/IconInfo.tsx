import { Flex, IJDalignProp, JDtypho } from "@janda-com/front";
import React from "react";
import { TElements } from "../../types/interface";
import { IIcons } from "../icons/declation";
import { JDicon } from "../icons/Icons";

interface IProp extends IJDalignProp {
    icon: IIcons;
    label: TElements;
}

export const IconInfo: React.FC<IProp> = ({ icon, label, ...props }) => {
    return (
        <Flex vCenter {...props}>
            <JDicon size="normal" color="grey4" mr icon={icon} />
            <JDtypho size="small" color="grey4">
                {label}
            </JDtypho>
        </Flex>
    );
};
