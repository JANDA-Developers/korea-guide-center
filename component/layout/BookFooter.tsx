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
import styled from "styled-components";
import { AppContext } from "../../context/context";
import { Logo } from "../logo/Logo";
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
    const TitleText = s("itsguide").split(" ");

    const BottomInfo = ({ label, value }: { label: string; value: string }) => {
        return (
            <Flex vCenter mr>
                <Bold mr="tiny">{label}</Bold> {value}
            </Flex>
        );
    };

    return (
        <div
            className="bookfooter"
            style={{
                backgroundColor: "#1A1A1A",
            }}
        >
            <JDcontainer verticalPadding size={footerContainerSize}>
                <div className="footer__innerContainer">
                    <div>
                        <h1 className="footer__citiesTitle">
                            {s("footerCities")}
                        </h1>
                        <div className="footer__city">
                            <div className="footer__cityPartOne">
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=서울`;
                                    }}
                                >
                                    서울
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=인천`;
                                    }}
                                >
                                    인천
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=부산`;
                                    }}
                                >
                                    부산
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=대구`;
                                    }}
                                >
                                    대구
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=울산`;
                                    }}
                                >
                                    울산
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=대전`;
                                    }}
                                >
                                    대전
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=제주`;
                                    }}
                                >
                                    제주
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=광주`;
                                    }}
                                >
                                    광주
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=세종`;
                                    }}
                                >
                                    세종
                                </span>
                            </div>
                            <div className="footer__cityPartTwo">
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=경기`;
                                    }}
                                >
                                    경기도
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=강원`;
                                    }}
                                >
                                    강원도
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=충북`;
                                    }}
                                >
                                    충청북도
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=충남`;
                                    }}
                                >
                                    충청남도
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=경북`;
                                    }}
                                >
                                    경상북도
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=경남`;
                                    }}
                                >
                                    경상남도
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=전북`;
                                    }}
                                >
                                    전라북도
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=전남`;
                                    }}
                                >
                                    전라남도
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__info">
                    <div
                        className="logoContainer"
                        style={{
                            marginBottom: "20px",
                        }}
                    >
                        <Logo className="bookHeader__logo" />
                        <div className="logoTextContainer">
                            <span
                                className="logoText__top"
                                style={{
                                    color: "white",
                                }}
                            >
                                {s("joyful")}
                            </span>
                            <div className="logoText__bottom">
                                <span
                                    style={{
                                        color: " #D0242B",
                                    }}
                                >
                                    {TitleText[0]}
                                </span>{" "}
                                <span
                                    style={{
                                        color: "white",
                                    }}
                                >
                                    {TitleText[1]}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="footer__infoDetail">
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
                            label={s("footer_fax")}
                            value={s("itsguide_FAX")}
                        />
                        <BottomInfo
                            label={s("footer_address")}
                            value={s("itsguide_adress")}
                        />
                    </div>
                </div>
                <JDhorizen margin={2} />
                <div
                    style={{
                        display: "flex",
                        color: "white",
                    }}
                >
                    <Link href={Paths.termsAndConditions}>
                        <a>
                            <Bold size="normal" mr>
                                {s("rule")}
                            </Bold>
                        </a>
                    </Link>
                    <Link href={Paths.privacyPolicy}>
                        <a>
                            <Bold size="normal" mr>
                                {s("privacy_policy")}
                            </Bold>
                        </a>
                    </Link>
                    <BottomInfo
                        label={"Copyright"}
                        value={
                            "© 2021 koreaguidecenter Co., Ltd. All rights reserved"
                        }
                    />
                </div>
            </JDcontainer>
        </div>
    );
};
