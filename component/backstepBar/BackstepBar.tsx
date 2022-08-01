import { JDicon, Flex, JDcard } from "@janda-com/front";
import { CardProps } from "@janda-com/front/dist/components/cards/Card";
import { JDatomExtentionSet } from "@janda-com/front/dist/types/interface";
import { useRouter } from "next/router";
import React from "react";
import { useHistory } from "react-router-dom";
import GuideContext from "../../page/context";
import { GuidePath } from "../../page/GuideRouter";

interface IProp extends CardProps, JDatomExtentionSet {
    label?: string;
    go?: (() => void) | string;
}

export const BackStepBar: React.FC<IProp> = ({
    label = "뒤로가기",
    go,
    ...props
}) => {
    const router = useRouter();
    const history = useHistory();

    const handleBack = () => {
        if (!go) {
            if (history) history.go(-1);
            if (router) router.back();
            return;
        }
        if (typeof go === "string") {
            (history || router).push(go || GuidePath.product);
        } else {
            go?.();
        }
    };

    return (
        <JDcard hover onClick={handleBack} {...props}>
            <Flex between vCenter>
                {label}
                <JDicon icon="arrowBack" />
            </Flex>
        </JDcard>
    );
};
