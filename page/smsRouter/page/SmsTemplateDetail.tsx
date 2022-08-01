import {
    InputText,
    Col,
    Grid,
    IUseModal,
    JDbutton,
    JDcard,
    JDhorizen,
    JDmodal,
    JDselect,
    Large,
    opFind,
    useInput,
    useSelect,
    JDtypho,
    JDlabel,
    Bold,
    JDalign,
    Flex,
    JDavatar,
    Language,
} from "@janda-com/front";
import React, { useContext, useEffect, useRef } from "react";
import ReactTooltip from "react-tooltip";
import { Tip } from "../../../atom/tip/Tip";
import { CardBtn, ModalBtn } from "../../../component/btns/ModalBtn";
import DotButton from "../../../component/dotButton/DotButton";
import JDEditor from "../../../component/editor/Editor";
import { useCopy } from "../../../hook/useCopy";
import {
    useTemplateCreate,
    useTemplateDelete,
    useTemplateUpdate,
} from "../../../hook/useNotification";
import {
    NotificationMethod,
    notificationTemplateList_NotificationTemplateList_items,
    NotificationTriggerEvent,
    NotificationTemplateCreateInput,
    AutoSendTargetType,
    KakaoTemplateStatus,
    KakaoTemplateInspStatus,
} from "../../../types/api";
import { omits } from "../../../utils/omits";
import { completeMsg } from "../../../utils/onCompletedMessage";
import { promptConfirm } from "../../../utils/prompt";
import { Validater } from "../../../utils/Validater";
import { EMAIL_TEMPLATE, PurchaseChangeAble, SMS_TEMPLATE } from "../helper";
import MsgTypeViewer from "../components/MsgTypeViewer";
import { TriggerCreater } from "../components/TriggerCreater";
import { template } from "lodash";
import { NotificationContext } from "../context";
import GuideContext from "../../context";
import {
    DEFAULT_EMAIL_SENDER,
    DEFAULT_SENDER,
    NOTI_METHOD_OPS,
} from "../../../types/const";
import { IselectedOption } from "@janda-com/front/dist/types/interface";
import { BackStepBar } from "../../../component/backstepBar/BackstepBar";

export interface ISmsDetailModalInfo {
    template?: notificationTemplateList_NotificationTemplateList_items;
}

interface IProp {
    modalHook: IUseModal<ISmsDetailModalInfo>;
}

export const NotificationTemplateDetail: React.FC<IProp> = ({ modalHook }) => {
    return <div></div>;
};

const smsReplace: IselectedOption[] = [
    {
        label: "구매가격",
        value: "[%%BK_PRICE%%]",
    },
    {
        label: "구매자명",
        value: "[%%BK_BUYERNAME%%]",
    },
    {
        label: "구매자이메일",
        value: "[%%BK_BUYEREMAIL%%]",
    },
    {
        label: "구매자 연락처",
        value: "[%%BK_BUYERPHONE%%]",
    },
    {
        label: "투어 타이틀",
        value: "[%%BK_TOURTITLE%%]",
    },
    {
        label: "투어 타이틀",
        value: "[%%BK_TOTALMEMBER%%]",
    },
    {
        label: "가이드명",
        value: "[%%BK_GUIDENAME%%]",
    },
    {
        label: "가이드닉네임",
        value: "[%%BK_GUIDENICKANME%%]",
    },
    {
        label: "결제방법",
        value: "[%%BK_PAYMETHOD%%]",
    },
];
