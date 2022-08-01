import React, { useContext } from "react";
import { useEffect } from "react";
import {
    AutoSendTargetType,
    NotificationMethod,
    notificationTemplateList_NotificationTemplateList_items_trigger,
} from "../../../types/api";
import GuideContext from "../../context";
import { NotificationContext } from "../context";
import { notificationMethodChecker } from "../helper";

interface IProp {
    templateMethod: NotificationMethod;
    trigger: notificationTemplateList_NotificationTemplateList_items_trigger;
    onChange: (
        trigger: notificationTemplateList_NotificationTemplateList_items_trigger
    ) => void;
    onDelete: () => void;
}

export const TriggerCreater: React.FC<IProp> = ({
    trigger,
    onChange,
    onDelete: handleDelete,
    templateMethod,
}) => {
    const {} = useContext(GuideContext);
    const { smsSendersOps, emailSendersOps, kakaoSenedersOps } =
        useContext(NotificationContext);
    const { event, isEnabled, sender, autoSendTargetType } = trigger;

    const { isEmail, isKakao, isSMS } =
        notificationMethodChecker(templateMethod);
    let option;
    if (isEmail) {
        option = emailSendersOps;
    } else if (isKakao) {
        option = kakaoSenedersOps;
    } else {
        option = smsSendersOps;
    }

    useEffect(() => {
        if (isEmail) {
            trigger.addReceivers = [];
            trigger.autoSendTargetType = [AutoSendTargetType.BOOKER];
        }
    }, [isEmail]);

    return <div></div>;
};
