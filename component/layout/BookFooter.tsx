import {
    Bold,
    Flex,
    JDcontainer,
    JDhorizen,
    WindowSize,
} from "@janda-com/front";
import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Logo } from "../logo/Logo";
import { Paths } from "../../pages/index[depre]";

interface IProp {
    footerContainerSize?: WindowSize;
}

export const BookFooter: React.FC<IProp> = ({
    footerContainerSize = WindowSize.lg,
}) => {
    const { s } = useContext(AppContext);
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
                                    {s("citySeoul")}
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=인천`;
                                    }}
                                >
                                    {s("cityIncheon")}
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=부산`;
                                    }}
                                >
                                    {s("cityBusan")}
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=대구`;
                                    }}
                                >
                                    {s("cityDaegu")}
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=울산`;
                                    }}
                                >
                                    {s("cityUlsan")}
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=대전`;
                                    }}
                                >
                                    {s("cityDaejeon")}
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=제주`;
                                    }}
                                >
                                    {s("cityJeju")}
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=광주`;
                                    }}
                                >
                                    {s("cityGwangju")}
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=세종`;
                                    }}
                                >
                                    {s("citySejong")}
                                </span>
                            </div>
                            <div className="footer__cityPartTwo">
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=경기`;
                                    }}
                                >
                                    {s("cityGyeonggi")}
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=강원`;
                                    }}
                                >
                                    {s("cityGangwon")}
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=충북`;
                                    }}
                                >
                                    {s("cityNorthChungCheon")}
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=충남`;
                                    }}
                                >
                                    {s("citySouthChungCheon")}
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=경북`;
                                    }}
                                >
                                    {s("cityNorthGyeonSang")}
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=경남`;
                                    }}
                                >
                                    {s("citySouthGyeonSang")}
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=전북`;
                                    }}
                                >
                                    {s("cityNorthJeonla")}
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=전남`;
                                    }}
                                >
                                    {s("citySouthJeonla")}
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
                                value={"kguidecenter@gmail.com"}
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
                        <BottomInfo
                            label={s("footer_accountNum")}
                            value={`301-0308-0055-81`}
                        />
                    </div>
                </div>
                <JDhorizen margin={2} />
                <div className="footer__CopyRight">
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
