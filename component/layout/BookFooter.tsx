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
                                        location.href = `/cities/search?title=전남`;
                                    }}
                                >
                                    {s("cityNorthJeonla")}
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=전북`;
                                    }}
                                >
                                    {s("citySouthJeonla")}
                                </span>
                                <span
                                    className="footer__cityText"
                                    onClick={() => {
                                        location.href = `/cities/search?title=dmz`;
                                    }}
                                >
                                    DMZ
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className=" text-[#8d8d89]">
                            {s("footerServices")}
                        </h1>
                        <div className="footer__serviceContainer">
                            <div className="footer__servicePartOne space-y-[0.938rem]">
                                <span
                                    className="cursor-pointer"
                                    onClick={() => {
                                        location.href = `/cities/search?title=DRIVING`;
                                    }}
                                >
                                    {s("ServicesDriving")}
                                </span>
                                <span
                                    className="cursor-pointer"
                                    onClick={() => {
                                        location.href = `/cities/search?title=MICE`;
                                    }}
                                >
                                    {s("ServicesMICE")}
                                </span>
                                <span
                                    className="cursor-pointer"
                                    onClick={() => {
                                        location.href = `/cities/search?title=통역`;
                                    }}
                                >
                                    {s("ServicesTranlate")}
                                </span>
                                <span
                                    className="cursor-pointer"
                                    onClick={() => {
                                        location.href = `/cities/search?title=Barrier-Free`;
                                    }}
                                >
                                    {s("ServicesBarrierFree")}
                                </span>
                                <span
                                    className="cursor-pointer"
                                    onClick={() => {
                                        location.href = `/cities/search?title=VIP의전`;
                                    }}
                                >
                                    {s("ServicesVIP")}
                                </span>
                                <span
                                    className="cursor-pointer"
                                    onClick={() => {
                                        location.href = `/cities/search?title=의료관광`;
                                    }}
                                >
                                    {s("ServicesWellness")}
                                </span>
                                <span
                                    className="cursor-pointer"
                                    onClick={() => {
                                        location.href = `/offer`;
                                    }}
                                >
                                    {s("ServicesPrivate")}
                                </span>
                            </div>
                            <div className="footer__servicePartTwo space-y-[0.938rem]">
                                <span
                                    className="cursor-pointer"
                                    onClick={() => {
                                        location.href = `/cities/search?title=부동산`;
                                    }}
                                >
                                    {s("ServicesRealEstate")}
                                </span>
                                <span
                                    className="cursor-pointer"
                                    onClick={() => {
                                        location.href = `/cities/search?title=유학`;
                                    }}
                                >
                                    {s("ServicesStudyingAbroad")}
                                </span>
                                <span
                                    className="cursor-pointer"
                                    onClick={() => {
                                        location.href = `/cities/search?title=장기체류`;
                                    }}
                                >
                                    {s("ServicesLongStay")}
                                </span>
                                <span
                                    className="cursor-pointer"
                                    onClick={() => {
                                        location.href = `/cities/search?title=요리`;
                                    }}
                                >
                                    {s("ServicesCook")}
                                </span>
                                <span
                                    className="cursor-pointer"
                                    onClick={() => {
                                        location.href = `cities/search?title=${s(
                                            "ServicesCustom"
                                        )}`;
                                    }}
                                >
                                    {s("ServicesCustom")}
                                </span>
                                <span
                                    className="cursor-pointer"
                                    onClick={() => {
                                        location.href = `/cities/search?title=축제`;
                                    }}
                                >
                                    {s("ServicesLocalFestival")}
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
