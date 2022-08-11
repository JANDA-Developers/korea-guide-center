import { Bold, Flex, IJDalignProp } from "@janda-com/front";
import React from "react";
import Link from "next/link";
import { Paths } from "../../../pages/index[depre]";
import { useContext } from "react";
import { AppContext } from "../../../context/context";
import { useRouter } from "next/router";
import { boardKeys, SHOPPING_LINK } from "../../../types/const";

interface IProp extends IJDalignProp {
    wrap?: boolean;
}

export const BookHeaderNavBtns: React.FC<IProp> = ({ ...props }) => {
    const { s, loginAnd } = useContext(AppContext);
    const router = useRouter();

    const isMain = router.pathname === "/";

    const handleToCustomTour = () => {
        loginAnd(() => {
            router.push(Paths.offer);
        });
    };

    return (
        <Flex className="bookHeader__bottom" {...props}>
            {/* <Bold className="bookHeader__bottomBtn" mr="large">
                <Link href={"/"}>
                    <a>{s("goToHome")}</a>
                </Link>
            </Bold> */}
            <Bold className="bookHeader__bottomBtn" mr="large">
                <Link href={Paths.locationalGuide}>
                    <a>{s("localtionalGuide")}</a>
                </Link>
            </Bold>
            <Bold className="bookHeader__bottomBtn" mr="large">
                <Link href={Paths.itstheme}>
                    <a>{s("itsThemaTravel")}</a>
                </Link>
            </Bold>
            <Bold className="bookHeader__bottomBtn" mr="large">
                <span onClick={handleToCustomTour}>
                    <a>{s("customTour")}</a>
                </span>
            </Bold>
            {/* <Bold className="bookHeader__bottomBtn" mr="large">
                <Link href={Paths.kpopCulture}>
                    <a>{s("kpopCulture")}</a>
                </Link>
            </Bold> */}
            {/* <Bold className="bookHeader__bottomBtn" mr="large">
                <a href={SHOPPING_LINK} target="_blank">
                    {s("shopping")}
                </a>
            </Bold> */}
            <Bold className="bookHeader__bottomBtn">
                <Link href={Paths.boardList + `?boardKey=${boardKeys.alert}`}>
                    <a>{s("customerCenter")}</a>
                </Link>
            </Bold>
            {/* <Bold className="bookHeader__bottomBtn">
                <Link href={Paths.companyIntroduction}>
                    <a>{s("footer_site_info")}</a>
                </Link>
            </Bold> */}
            {/* 
            <Bold className="bookHeader__bottomBtn">
                <Link href={Paths.localTour}>
                    <a>{s("localFestival")}</a>
                </Link>
            </Bold> */}
        </Flex>
    );
};
