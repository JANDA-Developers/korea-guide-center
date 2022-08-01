import { Flex, IJDalignProp, JDicon, s4 } from "@janda-com/front";
import React from "react";
import { Fsns } from "../../types/api";
import { omits } from "../../utils/omit";
import JDIcon, { ICONPROP } from "../icons/Icons";
import { SnsKeys, SnsKeyToIcon } from "./snsMap";

interface IProp extends IJDalignProp {
    sns?: Fsns | null;
    iconProps?: Partial<ICONPROP>;
}

const id = s4();
export const SNSIcons: React.FC<IProp> = ({ sns, iconProps, ...props }) => {
    if (!sns) return null;
    const validSns = Object.entries<string>(omits(sns)).filter((sns) => sns[1]);
    return (
        <Flex
            text="center"
            center
            vCenter
            wrap
            typho={{ size: "large" }}
            {...props}
        >
            {validSns.map(([key, val]) => {
                return (
                    <JDIcon
                        mr
                        hover
                        key={id + key + "Icon"}
                        onClick={() => {
                            window.open(val, "_blank");
                        }}
                        icon={SnsKeyToIcon[key as SnsKeys]}
                        {...iconProps}
                    />
                );
            })}
        </Flex>
    );
};
