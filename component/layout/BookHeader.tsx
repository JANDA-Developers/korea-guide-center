import {
    Flex,
    JDavatar,
    JDbutton,
    JDcontainer,
    Mr,
    useDropDown,
    useInput,
    WindowSize,
    InputText,
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
import { BookHeaderNavBtns } from "./components/BookHeaderUnder";

interface IProp {}

export const BookHeader: React.FC<IProp> = () => {
    const router = useRouter();
    const searchHook = useInput("");
    const [mobileSideOpen, setMobileSideOpen] = useState(false);
    const { me, isLogin, isGuide, isMaster, s, loginAnd } =
        useContext(AppContext);
    const profileDropBoxHook = useDropDown();
    const notiDropBoxHook = useDropDown();

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

    return (
        <div className="bookHeader">
            <JDcontainer size={WindowSize.lg}>
                <MobileBookerSideBar
                    onSignOut={signOut}
                    mobileSideOpen={mobileSideOpen}
                    setMobileSideOpen={setMobileSideOpen}
                />
                <BookerHeaderMobile
                    onMenuClick={() => {
                        setMobileSideOpen(true);
                    }}
                    className="bookHeader__mobileHeader"
                />
                <div className="bookHeader__pcHeader">
                    <Flex vCenter between className="bookHeader__top ">
                        <Flex vCenter>
                            <JDalign
                                onClick={() => {
                                    router.push("/");
                                }}
                            >
                                <Logo className="bookHeader__logo" />
                            </JDalign>
                            <Mr mr="large" />
                            <InputText
                                icon="search2"
                                type="text"
                                autoComplete="false"
                                className="bookHeader__searchInput"
                                placeholder={s("searchWithKeyWard")}
                                {...searchHook}
                                onKeyDown={whenEnter(toSearchPage)}
                            />
                            <AutoCompeletePreventer />
                        </Flex>
                        <Flex hide={!isLogin} vCenter>
                            <JDbutton
                                mr
                                className="bookHeader__btn"
                                size="small"
                                onClick={() => {
                                    router.push(
                                        Paths.guide + "/#" + GuidePath.join,
                                        undefined,
                                        { locale: "ko" }
                                    );
                                }}
                                thema="primary"
                                br="square"
                                mode="flat"
                            >
                                {isGuide || isMaster
                                    ? s("managePage")
                                    : s("guidejoin")}
                            </JDbutton>

                            <LanguageSelecter />

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
                                        top: "4rem",
                                        right: "3rem",
                                    };

                                    profileDropBoxHook.open(
                                        undefined,
                                        cooldinate
                                    );
                                }}
                            />
                        </Flex>
                        <Flex hide={isLogin} vCenter>
                            <LanguageSelecter mr />
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
                    </Flex>
                    <BookHeaderNavBtns />
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
            </JDcontainer>
        </div>
    );
};

export default BookHeader;
