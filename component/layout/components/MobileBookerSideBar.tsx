import {
    Bold,
    Flex,
    JDavatar,
    JDbutton,
    JDhorizen,
    useDropDown,
} from "@janda-com/front";
import { IButtonProps } from "@janda-com/front/dist/components/button/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../context/context";
import { Paths } from "../../../pages/index[depre]";
import { DEFAULT_PROFILE_IMG } from "../../../types/const";
import { ISet } from "../../../types/interface";
import { JDicon } from "../../icons/Icons";
import { LinkText } from "../../link/Link";
import { Logo } from "../../logo/Logo";
import { NotiModal } from "../../notification/components/NotiModal";

interface IProp {
    mobileSideOpen: boolean;
    setMobileSideOpen: ISet<boolean>;
    onSignOut: () => void;
}

export const MyCircle = () => {
    const { me } = useContext(AppContext);
    return <JDavatar mr img={me?.profileImage?.uri || DEFAULT_PROFILE_IMG} />;
};

interface ISideBarButtonProps extends IButtonProps {
    path?: Paths;
}
export const SideBarButton: React.FC<ISideBarButtonProps> = (props) => {
    const { me } = useContext(AppContext);
    const { path } = props;

    if (!path)
        return (
            <JDbutton
                className="mobilesideBar__btns"
                mode="flat"
                br="no"
                {...props}
            />
        );
    return (
        <Link href={path}>
            <a>
                <JDbutton
                    className="mobilesideBar__btns"
                    mode="flat"
                    br="no"
                    {...props}
                />
            </a>
        </Link>
    );
};

export const MobileBookerSideBar: React.FC<IProp> = ({
    mobileSideOpen,
    setMobileSideOpen,
    onSignOut,
}) => {
    const router = useRouter();
    const dropDownHook = useDropDown();
    const { isGuide, isMaster } = useContext(AppContext);
    const { me, s, isLogin } = useContext(AppContext);
    if (!mobileSideOpen) return null;
    return (
        <Flex oneone className="mobilesideBar">
            <div className="mobilesideBar__content">
                {isLogin ? (
                    <div>
                        <Flex className="mobilesideBar__head">
                            <MyCircle />
                            <div>
                                <Bold>{me?.name}</Bold>
                                <LinkText link={undefined}>
                                    <Link href={Paths.bookerProfile}>
                                        {s("profile_manage")}
                                    </Link>
                                </LinkText>
                            </div>
                        </Flex>
                        <JDhorizen margin={1} />
                        <div>
                            <SideBarButton path={Paths.wish}>
                                <JDicon mr="small" icon="heartEmpty" />{" "}
                                {s("wishList")}
                            </SideBarButton>
                        </div>
                        <div>
                            <SideBarButton path={Paths.mybook}>
                                <JDicon mr="small" icon="travel" />{" "}
                                {s("myTravel")}
                            </SideBarButton>
                        </div>
                        <div>
                            <SideBarButton path={Paths.myChatRooms}>
                                <JDicon mr="small" icon="chat" /> {s("message")}
                            </SideBarButton>
                        </div>
                        <div>
                            <SideBarButton
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    dropDownHook.open(e);
                                }}
                            >
                                <JDicon mr="small" icon="bell" />{" "}
                                {s("notification")}
                            </SideBarButton>
                        </div>
                        <JDhorizen margin={1} />
                        <Link href={Paths.guide}>
                            <a>
                                <div className="mobilesideBar__textBtn">
                                    <Bold>
                                        {isGuide || isMaster
                                            ? s("managePage")
                                            : s("guidejoin")}
                                    </Bold>
                                </div>
                            </a>
                        </Link>
                        <div
                            onClick={onSignOut}
                            className="mobilesideBar__textBtn"
                        >
                            <Bold>{s("logOut")}</Bold>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div>
                            <Logo className="mobilesideBar__logo" />
                            <JDhorizen margin={1} />
                            <div className="mobilesideBar__unLoginHead">
                                <div>
                                    <JDbutton
                                        onClick={() => {
                                            router.push(Paths.login);
                                        }}
                                        br={"round"}
                                        size="longLarge"
                                        mb
                                        mode="border"
                                    >
                                        {s("login")}
                                    </JDbutton>
                                </div>
                                <div>
                                    <JDbutton
                                        onClick={() => {
                                            router.push(
                                                Paths.login + "?mode=signUp"
                                            );
                                        }}
                                        br={"round"}
                                        size="longLarge"
                                        thema="primary"
                                    >
                                        {s("signUp")}
                                    </JDbutton>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div
                onClick={() => {
                    setMobileSideOpen(false);
                }}
                className="mobilesideBar__curton"
            />
            <NotiModal notiDropDownHook={dropDownHook} />
        </Flex>
    );
};
