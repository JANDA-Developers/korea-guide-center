import { Flex, IJDalignProp, JDbutton } from "@janda-com/front";
import Link from "next/link";
import React, { useContext } from "react";
import { AppContext } from "../../../context/context";
import { Paths } from "../../../pages/index[depre]";
import { boardKeys } from "../../../types/const";

interface IProp extends IJDalignProp {
    currentboardKey?: boardKeys;
}

export const BoardListHeader: React.FC<IProp> = ({
    currentboardKey,
    ...props
}) => {
    const { s, isGuide, isMaster } = useContext(AppContext);
    const check = (boardKey: boardKeys) => {
        return currentboardKey === boardKey ? "primary" : undefined;
    };

    return (
        <Flex mb {...props}>
            {(isGuide || isMaster) && (
                <Link
                    href={Paths.boardList + "?boardKey=" + boardKeys.guideAlert}
                >
                    <a>
                        <JDbutton
                            mr
                            thema={check(boardKeys.guideAlert)}
                            mode="border"
                        >
                            {s("guideAnnounce")}
                        </JDbutton>
                    </a>
                </Link>
            )}
            <Link href={Paths.boardList + "?boardKey=" + boardKeys.alert}>
                <a>
                    <JDbutton mr thema={check(boardKeys.alert)} mode="border">
                        {s("announce")}
                    </JDbutton>
                </a>
            </Link>
            <Link href={Paths.boardList + "?boardKey=" + boardKeys.question}>
                <a>
                    <JDbutton
                        mr
                        thema={check(boardKeys.question)}
                        mode="border"
                    >
                        {s("questions")}
                    </JDbutton>
                </a>
            </Link>
            <Link
                href={
                    Paths.boardList + "?boardKey=" + boardKeys.frequentQuestion
                }
            >
                <a>
                    <JDbutton
                        thema={check(boardKeys.frequentQuestion)}
                        mode="border"
                    >
                        {s("frequentQuestion")}
                    </JDbutton>
                </a>
            </Link>
        </Flex>
    );
};
