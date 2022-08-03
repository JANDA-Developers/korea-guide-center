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

const InnerContainer = styled.div`
    display: flex;
`;

const Cities = styled.div``;

const CitiesTitle = styled.h1`
    color: #8d8d89;
`;

const City = styled.div`
    display: flex;
`;

const CityPartOne = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 300px;
`;
const CityPartTwo = styled.div`
    display: flex;
    flex-direction: column;
`;

const CityText = styled.span`
    color: white;
    margin-bottom: 15px;
`;

const Info = styled.div`
    margin-top: 80px;
`;

const InfoDetail = styled.div`
    color: white;
`;

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
                <InnerContainer>
                    <Cities>
                        <CitiesTitle>Cities</CitiesTitle>
                        <City>
                            <CityPartOne>
                                <CityText>서울</CityText>
                                <CityText>인천</CityText>
                                <CityText>부산</CityText>
                                <CityText>대구</CityText>
                                <CityText>울산</CityText>
                                <CityText>대전</CityText>
                                <CityText>제주</CityText>
                                <CityText>광주</CityText>
                                <CityText>세종</CityText>
                            </CityPartOne>
                            <CityPartTwo>
                                <CityText>경기도</CityText>
                                <CityText>강원도</CityText>
                                <CityText>충청북도</CityText>
                                <CityText>충청남도</CityText>
                                <CityText>경상북도</CityText>
                                <CityText>경상남도</CityText>
                                <CityText>전라북도</CityText>
                                <CityText>전라남도</CityText>
                            </CityPartTwo>
                        </City>
                    </Cities>
                </InnerContainer>
                <Info>
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
                    <InfoDetail>
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
                    </InfoDetail>
                </Info>
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
