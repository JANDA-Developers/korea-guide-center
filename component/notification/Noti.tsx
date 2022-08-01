import React, { useContext, useEffect } from "react";
import {
    TUseInput,
    TOffset,
    JDbutton,
    deepCopy,
    JDrequireMark,
    IUseDropDown,
} from "@janda-com/front";
import { INotiLineProp } from "./components/NotiLine";
import { IconConifgProps } from "../icons/declation";
import { useSystemNotiRead } from "../../hook/useSystemNoti";
import { useHistory } from "react-router";
import GuideContext from "../../page/context";
import { AppContext } from "../../context/context";
import { NotiModal } from "./components/NotiModal";
import { useUnReadNotifiFind } from "../../hook/useNotification";

export type TtabData = {
    name: string;
    data: INotiLineProp[];
};

export interface INotiProp {
    notiDropDownHook: IUseDropDown;
    iconProp?: IconConifgProps;
    notiLines?: INotiLineProp[];
    loading?: boolean;
    notiIds?: string[];
    searchHook?: TUseInput;
    offset?: TOffset;
    tabs?: TtabData[];
    unReadCount?: number;
    onOpen?: () => void;
}

export const Noti: React.FC<INotiProp> = ({
    notiDropDownHook,
    iconProp,
    notiLines,
    searchHook,
    notiIds = [],
    tabs,
    loading,
    offset,
    onOpen,
    unReadCount,
}) => {
    if (typeof window === "undefined") return null;
    const context = useContext(GuideContext);
    const { me, isLogin, updateContext } = context;
    const { s } = useContext(AppContext);
    const { data } = useUnReadNotifiFind();
    const unReadChecked = sessionStorage.getItem("unreadChecked") === "T";
    const hasUnRead = !!data?.data;
    const unReadVisible = !unReadChecked && hasUnRead;
    const [notiRead] = useSystemNotiRead({
        onCompleted: ({ SystemNotiRead }) => {
            if (SystemNotiRead.ok) {
                const copyMe = deepCopy(me);
                if (copyMe) {
                    copyMe.unReadSystemNoties = [];
                    updateContext({
                        ...context,
                    });
                }
            }
        },
    });

    const history = useHistory();

    const toSystemNotiHistory = () => {
        // history.push(Paths.notiHistory);
        notiDropDownHook.close();
    };

    useEffect(() => {
        if (notiDropDownHook.isOpen) {
            notiRead({
                variables: {
                    ids: notiIds,
                },
            });
        }
    }, [notiDropDownHook.isOpen]);

    return (
        <span
            className="JDnoti"
            style={{
                position: "relative",
            }}
        >
            <JDbutton
                className="bookHeader__btn"
                mode="flat"
                size="small"
                mr
                br="square"
                onClick={(e) => {
                    e.cancelable = true;
                    e.persist();
                    e.stopPropagation();
                    notiDropDownHook.open(
                        undefined,
                        offset || {
                            top: "1.5rem",
                            right: 0,
                            left: "auto",
                        }
                    );
                    onOpen?.();
                }}
            >
                {s("notification")}
                {unReadVisible ? <JDrequireMark /> : null}
            </JDbutton>
            <NotiModal notiDropDownHook={notiDropDownHook} />
        </span>
    );
};

export default Noti;
