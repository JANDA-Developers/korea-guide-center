import {
    useDropDown,
    JDalign,
    JDtypho,
    JDavatar,
    Bold,
    Flex,
} from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useUnReadNotifiFind } from "../../hook/useNotification";
import { useSystemNotiRead } from "../../hook/useSystemNoti";
import { useSignOut } from "../../hook/useUser";
import GuideContext from "../../page/context";
import { SystemNotiSeverity } from "../../types/api";
import { DEFAULT_PROFILE_IMG } from "../../types/const";
import Noti from "../notification/Noti";
import ProfileModal, { Tservice } from "../profile/ProfileModal";
import Header from "./Header";
import { Paths } from "../../pages/index[depre]";
import { useRouter } from "next/router";

interface IProp {
    key?: string;
    sideOpen: boolean;
    setSide: ISet<boolean>;
}

export const HeaderWrap: React.FC<IProp> = ({ setSide, sideOpen }) => {
    const router = useRouter();
    const history = useHistory();
    const profileDropBoxHook = useDropDown();
    const notiDropDownHook = useDropDown();

    const context = useContext(GuideContext);
    const { me, isLogin, alertModalHook, isBooker, isGuide, isMaster } =
        context;
    const [search, setSearch] = useState("");
    const [signOut] = useSignOut({
        onCompleted: ({ SignOut }) => {
            if (SignOut.ok) {
                router.push(Paths.main);
            }
        },
    });

    const [read] = useSystemNotiRead();
    const { data } = useUnReadNotifiFind({
        skip: !isLogin,
    });
    const unReadNoties = data?.data;
    const unReadLength = unReadNoties?.length;

    const seriousNoti = unReadLength
        ? (unReadNoties || []).find(
              (d) => d.severity === SystemNotiSeverity.Serious
          )
        : undefined;

    useEffect(() => {
        if (seriousNoti) {
            alertModalHook?.openModal({
                content: seriousNoti.content,
                title: <JDtypho>관리자로부터 온 메세지 입니다.</JDtypho>,
            });
            read({
                variables: {
                    ids: [seriousNoti._id],
                },
            });
        }
    }, []);

    const services: Tservice[] = [
        {
            title: "여행자페이지",
            onClick: () => {
                router.push(Paths.itstheme);
            },
        },
        {
            title: "마이페이지",
            onClick: () => {
                history.push("/");
            },
        },
        {
            title: "로그아웃",
            onClick: () => {
                signOut();
                notiDropDownHook.close();
                profileDropBoxHook.close();
            },
        },
    ];

    return (
        <Header
            sideOpen={sideOpen}
            onMenuClick={() => {
                setSide(!sideOpen);
            }}
        >
            <Flex style={{ flex: 1 }} between vCenter>
                <div>
                    <Bold className="header__welecomMessage" hide={!isBooker}>
                        코리아 가이드센터의 가이드가 되어 활동 해보세요.
                    </Bold>
                    <Bold hide={!isMaster}>마스터계정</Bold>
                </div>
                <JDalign
                    hide={!isLogin}
                    style={{
                        position: "relative",
                    }}
                    flex={{
                        vCenter: true,
                    }}
                >
                    <JDalign hide={!isLogin} mr="large">
                        <Noti
                            onOpen={() => {
                                profileDropBoxHook.close();
                            }}
                            notiDropDownHook={notiDropDownHook}
                            notiIds={me?.unReadSystemNoties}
                        />
                    </JDalign>
                    <JDavatar
                        hide={!isLogin}
                        className="header__avatar"
                        img={me?.profileImage?.uri || DEFAULT_PROFILE_IMG}
                        hover
                        size="normal"
                        onClick={(e) => {
                            e.stopPropagation();
                            const cooldinate = {
                                top: "2.5rem",
                                right: "2.5rem",
                            };

                            notiDropDownHook.close();
                            profileDropBoxHook.open(undefined, cooldinate);
                        }}
                    />
                </JDalign>
                <ProfileModal
                    dropBoxHook={profileDropBoxHook}
                    userInfo={{
                        image: me?.profileImage?.uri || "",
                        name: me?.name || "",
                        version: "",
                    }}
                    services={services}
                />
            </Flex>
        </Header>
    );
};

export default HeaderWrap;
