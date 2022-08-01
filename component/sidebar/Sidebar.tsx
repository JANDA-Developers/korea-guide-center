import React, { useContext, useEffect, useState, useRef } from "react";
import SidebarMainMenu from "./SidebarMainMenu";
import SidebarSubMenu, { TSidebarSub } from "./SidebarSubMenu";
import { Flex } from "@janda-com/front";
import {
    RouteComponentProps,
    useHistory,
    useLocation,
    withRouter,
} from "react-router-dom";
import { getUrlIndex } from "./helper";
import { Logo } from "../logo/Logo";
import { ISet } from "@janda-com/front/dist/types/interface";
import { IIcons } from "../icons/declation";
import { GuidePath } from "../../page/GuideRouter";
import { SmsPaths } from "../../page/smsRouter/SmsRouter";
import GuideContext, { IGuideContext } from "../../page/context";
import { Paths } from "../../pages/index[depre]";
import Link from "next/link";

export interface IMenu {
    hidden?: boolean;
    skip?: boolean;
    icon: IIcons;
    title: string;
    sub: TSidebarSub[];
}

export const getMenuData = (context: IGuideContext): IMenu[] => {
    const { isMaster } = context;
    const MainMenuData: IMenu[] = [
        {
            icon: "houseGear",
            title: "프로필",
            sub: [
                {
                    icon: "addCircle",
                    title: "프로필관리",
                    exact: true,
                    path: GuidePath.join,
                    keywards: ["메인페이지", "홈"],
                    description:
                        "메인페이지는 최근에 일어난일을 요약해서 보여줍니다",
                    disabled: false,
                },
            ],
        },
        {
            icon: "travel",
            title: "투어",
            sub: [
                {
                    icon: "bus",
                    title: "투어관리",
                    exact: true,
                    path: GuidePath.product,
                    keywards: ["카테고리", "홈"],
                    description: "카테고리관리",
                    disabled: false,
                },
                {
                    icon: "calendar",
                    title: "일정관리",
                    exact: true,
                    path: GuidePath.schedule,
                    keywards: ["카테고리", "홈"],
                    description: "카테고리관리",
                    disabled: false,
                },

                {
                    icon: "list",
                    title: "회차목록",
                    exact: true,
                    path: GuidePath.tour,
                    keywards: ["예정된회차"],
                    description: "카테고리관리",
                    disabled: false,
                },

                {
                    icon: "paperPlane",
                    title: "예정회차",
                    exact: true,
                    path: GuidePath.tourWill,
                    keywards: ["예정된회차"],
                    description: "카테고리관리",
                    disabled: false,
                },

                {
                    icon: "photoFile",
                    title: "지난회차",
                    exact: true,
                    path: GuidePath.tourPast,
                    keywards: ["지난회차"],
                    description: "카테고리관리",
                    disabled: false,
                },

                {
                    icon: "circleX",
                    title: "취소회차",
                    exact: true,
                    path: GuidePath.tourCancel,
                    keywards: ["지나간회차"],
                    description: "카테고리관리",
                    disabled: false,
                },

                {
                    icon: "edit",
                    title: "맞춤투어",
                    exact: true,
                    path: GuidePath.offers,
                    keywards: ["카테고리", "홈"],
                    description: "카테고리관리",
                    disabled: false,
                },
                {
                    showWhenMatched: true,
                    icon: "edit",
                    title: "투어수정",
                    path: GuidePath.tourDetail,
                    keywards: ["카테고리", "홈"],
                    description: "카테고리관리",
                    disabled: false,
                },
                {
                    showWhenMatched: true,
                    icon: "edit",
                    title: "작성/수정",
                    path: GuidePath.productDetail,
                    keywards: ["카테고리", "홈"],
                    description: "카테고리관리",
                    disabled: false,
                },
            ],
        },
        {
            skip: !isMaster,
            icon: "sms",
            title: "SMS",
            sub: [
                // {
                //     icon: "info",
                //     title: "시작하기",
                //     path: SmsPaths.index,
                //     disabled: false,
                //     exact: true,
                //     keywards: ["SMS", "템플릿", "대쉬보드"],
                //     description: "SMS 및 템플릿 대쉬보드",
                // },
                // {
                //     icon: "addCircle",
                //     title: "템플릿 설정",
                //     disabled: false,
                //     path: SmsPaths.templates,
                //     exact: true,
                //     keywards: ["SMS", "템플릿"],
                //     description: "발신템플릿 정의 SMS 편리하게 이용하기",
                // },

                {
                    icon: "historyWatch",
                    title: "히스토리",
                    path: SmsPaths.history,
                    disabled: false,
                    keywards: ["SMS", "히스토리"],
                    description: "알림 서비스 발신 내역",
                    exact: true,
                },
            ],
        },
        {
            icon: "book",
            title: "예약",
            sub: [
                {
                    icon: "book",
                    title: "예약목록",
                    exact: true,
                    path: GuidePath.booking,
                    keywards: ["예약목록"],
                    description: "카테고리관리",
                    disabled: false,
                },
                {
                    icon: "addCircle",
                    title: "대기예약",
                    exact: true,
                    path: GuidePath.bookingReady,
                    keywards: ["예약목록"],
                    description: "카테고리관리",
                    disabled: false,
                },
                {
                    icon: "addCircle",
                    title: "예정된예약",
                    exact: true,
                    path: GuidePath.bookingWill,
                    keywards: ["예약목록"],
                    description: "카테고리관리",
                    disabled: false,
                },
                {
                    icon: "historyWatch",
                    title: "지난예약",
                    exact: true,
                    path: GuidePath.bookingPasted,
                    keywards: ["예약목록"],
                    description: "카테고리관리",
                    disabled: false,
                },
                {
                    icon: "addCircle",
                    title: "취소예약",
                    exact: true,
                    path: GuidePath.bookingCancel,
                    keywards: ["예약목록"],
                    description: "카테고리관리",
                    disabled: false,
                },
                {
                    icon: "fullStar",
                    title: "리뷰관리",
                    exact: true,
                    path: GuidePath.reviews,
                    keywards: ["예약목록"],
                    description: "카테고리관리",
                    disabled: false,
                },
            ],
        },
        {
            icon: "chat",
            title: "채팅",
            sub: [
                {
                    icon: "chat",
                    title: "채팅목록",
                    exact: true,
                    path: GuidePath.chatRoom,
                    keywards: ["카테고리", "홈"],
                    description: "카테고리관리",
                    disabled: false,
                },
            ],
        },
        {
            icon: "pay",
            title: "정산",
            sub: [
                {
                    icon: "historyWatch",
                    title: "완료목록",
                    exact: true,
                    path: GuidePath.settlementHistory,
                    keywards: ["카테고리", "홈"],
                    description: "카테고리관리",
                    disabled: false,
                },
                {
                    icon: "letter",
                    title: "요청목록",
                    exact: true,
                    path: GuidePath.settlementRequest,
                    keywards: ["카테고리", "홈"],
                    description: "카테고리관리",
                    disabled: false,
                },
                {
                    skip: !isMaster,
                    icon: "pay",
                    title: "수수료항목",
                    exact: true,
                    path: GuidePath.feePolicy,
                    keywards: ["카테고리", "홈"],
                    description: "카테고리관리",
                    disabled: false,
                },
            ],
        },
        {
            icon: "bell",
            title: "공지사항",
            sub: [
                {
                    icon: "bell",
                    title: "공지사항",
                    exact: true,
                    path: GuidePath.notificationList,
                    keywards: ["카테고리", "홈"],
                    description: "카테고리관리",
                    disabled: false,
                },
            ],
        },
        {
            skip: !isMaster,
            icon: "houseGear",
            title: "홈페이지",
            sub: [
                {
                    icon: "doubleBlock",
                    title: "카테고리",
                    exact: true,
                    path: GuidePath.categories,
                    keywards: ["카테고리", "홈"],
                    description: "카테고리관리",
                    disabled: false,
                },
                {
                    icon: "box",
                    title: "상품전시",
                    exact: true,
                    path: GuidePath.groups,
                    keywards: ["asd"],
                    description: "카테고리관리",
                    disabled: false,
                },
                // {
                //     icon: "camera",
                //     title: "메인화면",
                //     exact: true,
                //     path: GuidePath.indexControl,
                //     keywards: ["index Control"],
                //     description: "메인화면전시",
                //     disabled: false,
                // },
                {
                    icon: "photo",
                    title: "배너관리",
                    exact: true,
                    path: GuidePath.banner,
                    keywards: ["asd"],
                    description: "카테고리관리",
                    disabled: false,
                },
            ],
        },
        {
            skip: !isMaster,
            icon: "addCircle",
            title: "유저",
            sub: [
                {
                    icon: "addCircle",
                    disabled: false,
                    title: "모든회원",
                    path: GuidePath.userAll,
                    exact: true,
                    keywards: ["SMS", "발신자"],
                    description: "SMS 발신자관리",
                },
                {
                    icon: "addCircle",
                    disabled: false,
                    title: "가이드",
                    path: GuidePath.userGuide,
                    exact: true,
                    keywards: ["SMS", "발신자"],
                    description: "SMS 발신자관리",
                },
                {
                    icon: "addCircle",
                    disabled: false,
                    title: "일반회원",
                    path: GuidePath.userBooker,
                    exact: true,
                    keywards: ["SMS", "발신자"],
                    description: "SMS 발신자관리",
                },
                {
                    icon: "email",
                    disabled: false,
                    title: "관리자",
                    path: GuidePath.userAdmin,
                    exact: true,
                    keywards: ["SMS", "발신자"],
                    description: "SMS 발신자관리",
                },
                {
                    icon: "email",
                    disabled: false,
                    title: "탈퇴회원",
                    path: GuidePath.userDeleted,
                    exact: true,
                    keywards: ["탈퇴회원"],
                    description: "탈퇴회원",
                },
                {
                    icon: "addCircle",
                    disabled: false,
                    title: "가이드신청",
                    path: GuidePath.guideRequests,
                    exact: true,
                    keywards: ["SMS", "발신자"],
                    description: "SMS 발신자관리",
                },
            ],
        },
    ];

    return MainMenuData;
};

export interface IProps extends RouteComponentProps {
    isOpen: boolean;
    setSide: ISet<boolean>;
    _getMenuData?: (context: IGuideContext) => IMenu[];
}

const Sidebar: React.FC<IProps> = ({
    setSide,
    isOpen,
    _getMenuData = getMenuData,
}) => {
    const isInitialMount = useRef(true);
    const context = useContext(GuideContext);
    const { pathname, key } = useLocation();
    const menuData = _getMenuData(context);
    const defaultIndex = getUrlIndex(pathname, menuData);
    const [menuIndex, setMenuIndex] = useState(defaultIndex);

    let history = useHistory();

    const handleMainMenuClick = (index: number) => {
        setSide(true);
        setMenuIndex(index);
        const path = menuData[index]?.sub?.[0]?.path;
        history.push(path);
    };

    const handleSubMenuClick = (path: string) => {
        history.push(path);
    };

    useEffect(() => {
        if (isInitialMount.current) {
            setMenuIndex(defaultIndex);
        }
    }, [pathname]);

    // 로그인 onclick, login, logout 추가 y
    return (
        <div
            className={`sidebar ${isOpen ? "sidebar--open" : "sidebar--close"}`}
        >
            <Flex oneone className="sidebar__head">
                <div className="sidebar__logo">
                    <Link href={Paths.main}>
                        <a>
                            <Logo
                                lang="ko"
                                type={isOpen ? "long" : undefined}
                            />
                        </a>
                    </Link>
                </div>
                +
            </Flex>
            <nav className="sidebar__menu">
                <ul className="mainMenu">
                    {menuData.map((menu, i) => {
                        if (menu.skip) return null;
                        return (
                            <SidebarMainMenu
                                selected={menuIndex === i}
                                onMenuClick={handleMainMenuClick}
                                key={`sidebarMain_${i}`}
                                menu={menu}
                                index={i}
                            />
                        );
                    })}
                </ul>
                <ul className="subMenu">
                    {menuData[menuIndex]?.sub.map((menu, index) => (
                        <SidebarSubMenu
                            onMenuClick={handleSubMenuClick}
                            key={`submenuList-${index}`}
                            menu={menu}
                        />
                    ))}
                </ul>
                {isOpen && (
                    <div
                        onClick={() => {
                            setSide(false);
                        }}
                        className="sidebar__mo-curtain"
                    />
                )}
            </nav>
        </div>
    );
};

export default withRouter(Sidebar);
