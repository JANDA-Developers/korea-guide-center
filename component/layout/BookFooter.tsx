import {
    Bold,
    Flex,
    JDbutton,
    JDcontainer,
    JDhorizen,
    Small,
    Tiny,
    WindowSize,
} from "@janda-com/front";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Paths } from "../../pages/index[depre]";
import JDIcon from "../icons/Icons";

interface IProp {
    footerContainerSize?: WindowSize;
}

export const BookFooter: React.FC<IProp> = ({
    footerContainerSize = WindowSize.lg,
}) => {
    const { s, isGuide, isMaster, isLogin } = useContext(AppContext);
    const router = useRouter();

    const BottomInfo = ({ label, value }: { label: string; value: string }) => {
        return (
            <Flex vCenter mr>
                <Bold mr="tiny">{label}</Bold> {value}
            </Flex>
        );
    };

    return (
        <div className="bookfooter">
            <JDcontainer verticalPadding size={footerContainerSize}>
                <Flex column>
                    <Flex between>
                        <Bold mr mb>
                            {s("customerCeneterInfo")}
                        </Bold>
                        <JDbutton
                            hide={!isLogin}
                            size="small"
                            mode="border"
                            thema="grey2"
                            padding="small"
                            onClick={() => {
                                router.push(Paths.guide);
                            }}
                        >
                            {isGuide || isMaster
                                ? s("managePage")
                                : s("guidejoin")}
                        </JDbutton>
                    </Flex>

                    <Small
                        style={{
                            lineBreak: "anywhere",
                            whiteSpace: "pre-line",
                        }}
                    >
                        <div className="textTransformClear">
                            {s("customerCeneterData")}
                        </div>
                    </Small>
                </Flex>
                <JDhorizen margin={3} />

                <Flex mb between>
                    <Link href={Paths.termsAndConditions}>
                        <a>
                            <Bold size="small" mr>
                                {s("rule")}
                            </Bold>
                        </a>
                    </Link>
                    <Link href={Paths.privacyPolicy}>
                        <a>
                            <Bold size="small" mr>
                                {s("privacy_policy")}
                            </Bold>
                        </a>
                    </Link>
                    <Link href={Paths.companyIntroduction}>
                        <a>
                            <Bold size="small" mr>
                                {s("footer_site_info")}
                            </Bold>
                        </a>
                    </Link>
                    <Flex>
                        <div>
                            <JDIcon
                                onClick={() => {
                                    window.open(
                                        "https://www.youtube.com/channel/UCaqfo9iu08Nz53fri_oHmCQ",
                                        "_blank"
                                    );
                                }}
                                hover
                                mr="small"
                                icon="youtube"
                            />
                            <JDIcon
                                onClick={() => {
                                    window.open(
                                        "https://www.instagram.com/korea_guide_/",
                                        "_blank"
                                    );
                                }}
                                hover
                                mr="small"
                                icon="insta"
                            />
                            <JDIcon
                                onClick={() => {
                                    window.open(
                                        "https://www.facebook.com/KoreaGuide-109094731483260",
                                        "_blank"
                                    );
                                }}
                                hover
                                mr="small"
                                icon="facebook"
                            />
                        </div>
                    </Flex>
                </Flex>
                <Tiny color="grey2">
                    <BottomInfo
                        label={s("footer_ceo")}
                        value={s("itsguide_CEO")}
                    />
                    <BottomInfo
                        label={s("footer_transferNum")}
                        value={"2020-부산영도-0215"}
                    />
                    <BottomInfo
                        label={s("footer_businessNumber")}
                        value={"863-86-01971"}
                    />
                    <div className="textTransformClear">
                        <BottomInfo
                            label={s("footer_email")}
                            value={"kgcenter727@gmail.com"}
                        />
                    </div>
                    <BottomInfo
                        label={"Copyright"}
                        value={
                            "© 2021 koreaguidecenter Co., Ltd. All rights reserved"
                        }
                    />
                    <BottomInfo
                        label={s("footer_phoneNumber")}
                        value={s("itsguide_phone")}
                    />
                    <BottomInfo
                        label={s("footer_fax")}
                        value={s("itsguide_FAX")}
                    />
                    <BottomInfo
                        label={s("footer_address")}
                        value={s("itsguide_adress")}
                    />
                    <BottomInfo
                        label={s("footer_accountNum")}
                        value={s("itsguide_bank")}
                    />
                </Tiny>
            </JDcontainer>
        </div>
    );
};
