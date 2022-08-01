import { Flex, IJDalignProp } from "@janda-com/front";
import React from "react";
import { Paths } from "../../../pages/index[depre]";
import { Logo } from "../../logo/Logo";
import Link from "next/link";
import { JDicon } from "../../icons/Icons";
import { LanguageSelecter } from "../../langSelecter/LangSelecter";
import { ScrollBox } from "../../scrollBox/ScrollBox";
import { BookHeaderNavBtns } from "./BookHeaderUnder";

interface IProp extends IJDalignProp {
    onMenuClick: () => void;
}

export const BookerHeaderMobile: React.FC<IProp> = ({
    onMenuClick,
    className,
    ...props
}) => {
    return (
        <div className={`bookHeaderMobile ${className}`}>
            <Flex mb="large" vCenter between {...props}>
                <JDicon size="normal" onClick={onMenuClick} hover icon="menu" />
                <div className="bookHeaderMobile__center">
                    <Link href={Paths.main}>
                        <a>
                            <Logo className="bookHeaderMobile__logo" />
                        </a>
                    </Link>
                </div>
                <Flex vCenter>
                    <LanguageSelecter mr="huge" />
                    <Link href={Paths.search}>
                        <a>
                            <JDicon size="normal" icon="search" />
                        </a>
                    </Link>
                </Flex>
            </Flex>
            <ScrollBox>
                <BookHeaderNavBtns />
            </ScrollBox>
        </div>
    );
};
