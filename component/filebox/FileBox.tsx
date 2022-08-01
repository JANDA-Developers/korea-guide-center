import { Bold, Flex, IJDalignProp, JDbox } from "@janda-com/front";
import React from "react";
import { Ffile } from "../../types/api";
import { cutStr } from "../../utils/cutStr";
import { JDicon } from "../icons/Icons";

interface IProp extends IJDalignProp {
    file: Ffile;
}

export const FileBox: React.FC<IProp> = ({ file, ...props }) => {
    return (
        <JDbox hover className="FileBox" {...props}>
            <Flex
                onClick={() => {
                    window.open(file.uri, "_blank");
                }}
                vCenter
                between
            >
                <Flex mr vCenter>
                    <Bold>{cutStr(file.name, 15)} </Bold>
                </Flex>
                <JDicon
                    style={{ width: "1.8rem", height: "1.8rem" }}
                    icon="download"
                />
            </Flex>
        </JDbox>
    );
};
