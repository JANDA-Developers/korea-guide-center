import { Flex, JDalign, JDbox, JDcard } from "@janda-com/front";
import React from "react";
import JDIcon from "../component/icons/Icons";

interface IProp {}

export const InfoCard: React.FC<IProp> = ({ children }) => {
    return (
        <JDbox className="infoCards">
            <Flex>
                <JDalign style={{ flex: 0 }}>
                    <JDIcon mr icon="info" />
                </JDalign>
                {children}
            </Flex>
        </JDbox>
    );
};
