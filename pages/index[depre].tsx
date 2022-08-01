import { Flex, JDbutton, JDtypho, Mr } from "@janda-com/front";
import { useRouter } from "next/router";
import React from "react";
import { Logo } from "../component/logo/Logo";
import { MainFullBox } from "../component/mainFullBox/MinFullBox";
import Link from "next/link";
import { JDicon } from "../component/icons/Icons";

export enum Paths {
    main = "/",
    bookerProfile = "/bookerProfile",
    profile = "/profile",
    offer = "/offer",
    emailFind = "/emailFind",
    pwFind = "/pwFind",
    myoffer = "/myoffer",
    myreview = "/myReviews",
    myBoards = "/myBoards",
    wish = "/wish",
    joinReady = "/joinReady",
    customerCenter = "/customerCenter",
    chatRoom = "/chatRoom",
    myChatRooms = "/myChatRooms",
    login = "/login",
    signUp = "/signUp",
    search = "/product/search",
    productDetailView = "/product",
    bookingDetailView = "/mybook/detail",
    locationalGuide = "/locationalGuide",
    itstheme = "/itstheme",
    paySucess = "/pay/sucess",
    payErr = "/payErr",
    pay = "/pay",
    guide = "/guide",
    bookFind = "/bookFind",
    mybook = "/mybook",
    verificationComplete = "/verificationComplete",
    verification = "/verification",
    boardList = "/BoardList",
    boardView = "/BoardView",
    boardWrite = "/BoardWrite",
    privacyPolicy = "/policy/PrivacyPolicy",
    termsAndConditions = "/policy/TermsAndConditions",
    companyIntroduction = "/policy/CompanyIntroduction",
    localTour = "/localTour",
    kpopCulture = "/kpopCulture",
}

interface IProp {}

const demo = "/img/demo.jpg";
export const Index: React.FC<IProp> = () => {
    const router = useRouter();
    return (
        <div className="main">
            <MainFullBox src={demo}>
                <Flex vCenter className="main__topPlace">
                    <Logo className="main__logo" />
                    <JDtypho mr color="white">
                        <Link href={Paths.main}>
                            <a>
                                <Flex vCenter>
                                    지역별 가이드 <Mr mr="small" />
                                    <JDicon size="tiny" icon="arrowRight" />
                                </Flex>
                            </a>
                        </Link>
                    </JDtypho>
                    <JDtypho color="white">
                        <Link href={Paths.itstheme}>
                            <a>
                                <Flex vCenter>
                                    잇츠 테마투어 <Mr mr="small" />
                                    <JDicon size="tiny" icon="arrowRight" />
                                </Flex>
                            </a>
                        </Link>
                    </JDtypho>
                </Flex>
                <div className="main__textBox">
                    <JDtypho size="h1" weight={600} color="white">
                        가이드여행의 <br />
                        트렌드센터
                    </JDtypho>
                    <JDtypho size="h5" weight={600} mb="largest" color="white">
                        Traveling with 코리아가이드
                    </JDtypho>
                    <div className="main__buttonPlaces">
                        <JDbutton
                            br="no"
                            className="main__button"
                            onClick={() => {
                                router.push(Paths.locationalGuide);
                            }}
                            mr="large"
                            size="large"
                        >
                            지역별 가이드 <Mr mr="small" />
                            <JDicon icon="map" />
                        </JDbutton>
                        <JDbutton
                            br="no"
                            className="main__button"
                            onClick={() => {
                                router.push(Paths.itstheme);
                            }}
                            size="large"
                        >
                            잇츠 테마투어 <Mr mr="small" />
                            <JDicon icon="bus" />
                        </JDbutton>
                    </div>
                </div>
            </MainFullBox>
        </div>
    );
};

export default Index;
