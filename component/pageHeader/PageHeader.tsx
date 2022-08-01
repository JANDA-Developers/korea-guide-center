import { Bold, Flex, Small } from "@janda-com/front";
import { TElements } from "@janda-com/front/dist/types/interface";
import React from "react";

export interface IPageHeaderProps {
    pageName: string;
    title: TElements;
    description?: TElements;
    RightSide?: TElements;
}

export const PageHeader: React.FC<IPageHeaderProps> = ({
    pageName,
    title,
    RightSide,
    description,
}) => {
    return (
        <Flex className="pageHeader">
            <div>
                <Small mb>{pageName}</Small>
                <Bold mb="small" size="h6">
                    {title}
                </Bold>
                <Small>{description}</Small>
            </div>
            {RightSide}
        </Flex>
    );
};
