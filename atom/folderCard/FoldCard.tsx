import { Bold, Flex, JDcard } from "@janda-com/front";
import { IJDcardProps } from "@janda-com/front/dist/components/cards/Card";
import { TElements } from "@janda-com/front/dist/types/interface";
import React, { useState } from "react";
import { useEffect } from "react";
import { JDicon } from "../../component/icons/Icons";

interface IProp extends Omit<IJDcardProps, "title"> {
    title: TElements;
    body?: TElements;
    defaultFold?: boolean;
    foldCallBack?: (fold: boolean) => void;
}

export const FoldCard: React.FC<IProp> = ({
    children,
    body,
    title,
    defaultFold,
    foldCallBack,
    ...props
}) => {
    const [fold, setFold] = useState(defaultFold);

    const handleFoldToggle = () => {
        setFold(!fold);
    };

    useEffect(() => {
        foldCallBack?.(!fold);
    }, [fold]);

    return (
        <JDcard className="foldCard" {...props}>
            <div>
                <Flex
                    className="foldCard__header"
                    hover
                    onClick={handleFoldToggle}
                    vCenter
                    between
                >
                    {" "}
                    <Bold>{title}</Bold>{" "}
                    <JDicon icon={fold ? "arrowDown" : "arrowUp"} />
                </Flex>
                {!fold && (
                    <div className="foldCard__body">{body || children}</div>
                )}
            </div>
        </JDcard>
    );
};
