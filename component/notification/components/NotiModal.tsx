import {
    Flex,
    IUseDropDown,
    JDbutton,
    JDdropDown,
    JDpreloader,
} from "@janda-com/front";
import React from "react";
import { useEffect, useContext } from "react";
import { Empty } from "../../../atom/Empty";
import { AppContext } from "../../../context/context";
import { useSystemNotiList } from "../../../hook/useSystemNoti";
import { FsystemNoti } from "../../../types/api";
import { JDicon } from "../../icons/Icons";
import { Head } from "../../ProfileForm/ProfileForm";
import { NotiLine } from "./NotiLine";

interface IProp {
    notiDropDownHook: IUseDropDown;
}

export const NotiModal: React.FC<IProp> = ({ notiDropDownHook }) => {
    const { me, s } = useContext(AppContext);
    const { items } = useSystemNotiList(
        {},
        {
            skip: !me?._id,
        }
    );

    useEffect(() => {
        if (notiDropDownHook.isOpen) {
            sessionStorage.setItem("unreadChecked", "T");
        }
    }, [notiDropDownHook.isOpen]);

    return (
        <JDdropDown
            mode="fixed"
            closeOnWindowClick
            className="JDnoti__dropBox JDdropDown--fullInmobile"
            position={"absolute"}
            {...notiDropDownHook}
        >
            <Head
                className="JDdropDown__head"
                require={false}
                description={s("notificationTitle")}
                title={
                    <Flex vCenter between>
                        {s("notificationList")}
                        <JDicon
                            onClick={notiDropDownHook.close}
                            hover
                            icon="close"
                        />
                    </Flex>
                }
            ></Head>
            {items?.map((noti, i) => (
                <NotiLine key={noti._id || `NotiLi${i}`} {...(noti as any)} />
            ))}
            <Empty empty={items} msg={s("noNewNotificationList")} />
        </JDdropDown>
    );
};
