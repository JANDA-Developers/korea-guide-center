import { Flex, JDbox } from "@janda-com/front";
import React from "react";
import { JDicon } from "../../../component/icons/Icons";
import { yyyymmdd } from "../../../utils/dateFormat";

interface IProp {
    from: Date;
    to?: Date | null;
}

export const FromDateToDate: React.FC<IProp> = ({ from, to }) => {
    return (
        <JDbox>
            <Flex vCenter around>
                <Flex
                    vCenter
                    style={{
                        textDecoration: "line-through",
                    }}
                >
                    <JDicon icon="calendar" mr="tiny" /> {yyyymmdd(from)}
                </Flex>
                <JDicon size="tiny" icon="arrowRight" />
                <Flex vCenter>
                    <JDicon icon="calendar" mr="tiny" />
                    {to ? yyyymmdd(to) : "선택없음"}
                </Flex>
            </Flex>
        </JDbox>
    );
};
