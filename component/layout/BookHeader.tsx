import {
    Flex,
    JDavatar,
    JDbutton,
    Mr,
    useDropDown,
    useInput,
    JDalign,
} from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { useSignOut } from "../../hook/useUser";
import { Logo } from "../logo/Logo";
import ProfileModal, { Tservice } from "../profile/ProfileModal";
import { DEFAULT_PROFILE_IMG } from "../../types/const";
import { useRouter } from "next/router";
import { Paths } from "../../pages/index[depre]";
import { whenEnter } from "../../utils/whenEnter";
import { searchPageQueryGenerate } from "../../pages/product/search";
import { completeMsg } from "../../utils/onCompletedMessage";
import { GuidePath } from "../../page/GuideRouter";
import { LanguageSelecter } from "../langSelecter/LangSelecter";
import { BookerHeaderMobile } from "./components/BookerHeaderMobile";
import { MobileBookerSideBar } from "./components/MobileBookerSideBar";
import { useState } from "react";
import Noti from "../notification/Noti";
import { AutoCompeletePreventer } from "../AutoCompeltePreventer/AutoCompletePreventer";
import { BookHeaderNavBtns } from "./components/BookHeaderNavBtns";
import styled from "styled-components";
import { CitySelecter } from "../citySelector/citySelecter";
import { AnimatePresence, motion } from "framer-motion";
import MenuScreen from "./MenuScreen";
import { useRecoilState } from "recoil";
import { menuOpenState } from "../../recoil/atoms";

const IconAnchor = styled.a``;

const JoinGuide = styled.span`
    color: #d0242b;
    cursor: pointer;
`;

interface IProp {}

export const BookHeader: React.FC<IProp> = () => {
    const router = useRouter();
    const searchHook = useInput("");
    const [mobileSideOpen, setMobileSideOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);
    const { me, isLogin, isGuide, isMaster, s, loginAnd } =
        useContext(AppContext);
    const profileDropBoxHook = useDropDown();
    const notiDropBoxHook = useDropDown();
    const TitleText = s("itsguide").split(" ");

    const [signOut] = useSignOut({
        onCompleted: ({ SignOut }) => {
            if (completeMsg(SignOut, s("logOutCompleted"))) {
                router.push(Paths.locationalGuide);
            }
        },
    });

    const services: Tservice[] = [
        {
            title: s("profile_manage"),
            onClick: () => {
                router.push(
                    isGuide || isMaster
                        ? Paths.profile + "/" + me?._id
                        : Paths.bookerProfile
                );
            },
        },
        {
            skip: !(isGuide || isMaster),
            title: s("accountManage"),
            onClick: () => {
                router.push(Paths.bookerProfile);
            },
        },
        {
            title: s("wishList"),
            onClick: () => {
                router.push(Paths.wish);
            },
        },

        {
            skip: isGuide,
            title: s("myReviews"),
            onClick: () => {
                router.push(Paths.myreview);
            },
        },
        {
            title: s("logOut"),
            onClick: () => {
                signOut();
                profileDropBoxHook.close();
            },
        },
    ].filter((s) => !s.skip);

    const toSearchPage = () => {
        const to = searchPageQueryGenerate({ title: searchHook.value });
        location.href = to;
        // router.push(to);
    };

    const handleToCustomTour = () => {
        loginAnd(() => {
            router.push(Paths.offer);
        });
    };

    const menuVariants = {
        hover: {
            fill: "#D0242B",
            pathLength: 1,
        },
    };

    const onClickMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="bookHeader">
            <MenuScreen
                onClickMenu={onClickMenu}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />
            <div>
                {/* 모바일 뷰 사이드 바 */}
                <MobileBookerSideBar
                    onSignOut={signOut}
                    mobileSideOpen={mobileSideOpen}
                    setMobileSideOpen={setMobileSideOpen}
                />
                {/* 모바일 뷰 헤더 */}
                <BookerHeaderMobile
                    onMenuClick={() => {
                        setMobileSideOpen(true);
                    }}
                    className="bookHeader__mobileHeader"
                />
                <div className="bookHeader__pcHeader">
                    <Flex between className="bookHeader__top">
                        <Flex vCenter between>
                            <div className="iconContainer">
                                <IconAnchor
                                    href="https://www.facebook.com/KoreaGuideCenter/"
                                    target="_blank"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 320 512"
                                        style={{
                                            marginRight: 20,
                                        }}
                                    >
                                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                    </svg>
                                </IconAnchor>
                                <IconAnchor
                                    href="https://www.instagram.com/korea_guide_/"
                                    target="_blank"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 448 512"
                                        style={{
                                            marginRight: 20,
                                        }}
                                    >
                                        <path
                                            fill="868686"
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                        />
                                    </svg>
                                </IconAnchor>
                                <IconAnchor href="#" target="_blank">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 512 512"
                                        style={{
                                            marginRight: 20,
                                        }}
                                    >
                                        <path
                                            fill="#868686"
                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                        />
                                    </svg>
                                </IconAnchor>
                                <IconAnchor
                                    href="https://www.youtube.com/channel/UCaqfo9iu08Nz53fri_oHmCQ/videos"
                                    target="_blank"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                        width="16"
                                        height="16"
                                        style={{
                                            marginRight: 20,
                                        }}
                                    >
                                        <path
                                            fill="#868686"
                                            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                                        />
                                    </svg>
                                </IconAnchor>
                                <LanguageSelecter />
                                {/* 가이드 페이지 */}
                                <Flex hide={!isLogin} vCenter>
                                    <JoinGuide
                                        className="bookHeader__btn"
                                        onClick={() => {
                                            router.push(
                                                Paths.guide +
                                                    "/#" +
                                                    GuidePath.join,
                                                undefined,
                                                { locale: "ko" }
                                            );
                                        }}
                                    >
                                        {isGuide || isMaster
                                            ? s("managePage")
                                            : s("guidejoin")}
                                    </JoinGuide>
                                </Flex>
                            </div>
                        </Flex>
                        <JDalign
                            onClick={() => {
                                router.push("/");
                            }}
                        >
                            <div className="logoContainer">
                                <Logo className="bookHeader__logo" />
                                <div className="logoTextContainer">
                                    <span className="logoText__top">
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
                                        <span>{TitleText[1]}</span>
                                    </div>
                                </div>
                            </div>
                        </JDalign>
                        {/* 로그인 및 등등 */}
                        <Flex vCenter>
                            <CitySelecter />
                            <svg
                                className="bookHeader__menu"
                                onClick={onClickMenu}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <motion.path
                                    variants={menuVariants}
                                    whileHover="hover"
                                    fill="rgb(0,0,0)"
                                    d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
                                />
                            </svg>
                        </Flex>
                    </Flex>
                    <div className="userContainer">
                        <BookHeaderNavBtns />
                        <Flex hide={!isLogin} vCenter>
                            {/* 로그인 */}
                            <JDbutton
                                className="bookHeader__btn"
                                onClick={() => {
                                    router.push(Paths.mybook);
                                }}
                                size="small"
                                br="square"
                                mode="flat"
                            >
                                {s("myTravel")}
                            </JDbutton>
                            <JDbutton
                                className="bookHeader__btn"
                                onClick={() => {
                                    router.push(Paths.myChatRooms);
                                }}
                                size="small"
                                br="square"
                                mode="flat"
                            >
                                {s("message")}
                            </JDbutton>
                            <Noti
                                onOpen={() => {
                                    profileDropBoxHook.close();
                                }}
                                notiDropDownHook={notiDropBoxHook}
                                notiIds={me?.unReadSystemNoties}
                            />
                            <JDavatar
                                hide={!isLogin}
                                className="header__avatar"
                                img={
                                    me?.profileImage?.uri || DEFAULT_PROFILE_IMG
                                }
                                hover
                                size="normal"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const cooldinate = {
                                        top: "7rem",
                                        right: "1rem",
                                    };

                                    profileDropBoxHook.open(
                                        undefined,
                                        cooldinate
                                    );
                                }}
                            />
                        </Flex>
                        <Flex hide={isLogin} vCenter>
                            {/* 비로그인 */}
                            <JDbutton
                                onClick={() => {
                                    router.push(Paths.bookFind);
                                }}
                                mr
                                thema="primary"
                                mode="flat"
                                size="small"
                                padding="small"
                            >
                                {s("bookFind")}
                            </JDbutton>
                            <JDbutton
                                onClick={() => {
                                    router.push(Paths.login);
                                }}
                                mr
                                thema="primary"
                                mode="flat"
                                size="small"
                                padding="small"
                            >
                                {s("login")}
                            </JDbutton>
                            <JDbutton
                                style={{
                                    borderWidth: 2,
                                }}
                                onClick={() => {
                                    router.push(Paths.login + "?signUp=true");
                                }}
                                mode="border"
                                thema="primary"
                                size="small"
                                padding="small"
                            >
                                {s("signUp")}
                            </JDbutton>
                        </Flex>
                    </div>
                    <ProfileModal
                        dropBoxHook={profileDropBoxHook}
                        userInfo={{
                            image: me?.profileImage?.uri || "",
                            name: me?.name || "",
                            version: "",
                        }}
                        services={services}
                    />
                </div>
            </div>
        </div>
    );
};

export default BookHeader;
