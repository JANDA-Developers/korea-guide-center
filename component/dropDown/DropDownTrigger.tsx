import { IJDalignProp, IUseDropDown, JDalign, TOffset } from "@janda-com/front";
import React from "react";

interface IProp extends IJDalignProp {
    dropDownHook: IUseDropDown;
    offset?: TOffset;
}

export const DropDownTrigger: React.FC<IProp> = ({
    dropDownHook,
    offset,
    ...props
}) => {
    return (
        <JDalign
            style={{ position: "relative" }}
            onMouseLeave={() => {
                dropDownHook.close();
            }}
            onMouseEnter={(e) => {
                dropDownHook.open(undefined, offset);
            }}
            {...props}
        />
    );
};
