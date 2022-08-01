import { useSelect } from "@janda-com/front";
import { useState } from "react";
import { FnotificationManager_senders, NotificationMethod } from "../types/api";
import { NotificationDefaultSenderOp } from "../types/const";

export const senderOpsByType = (
    type: NotificationMethod,
    senders: FnotificationManager_senders[]
) => {
    const typeSenders = senders.filter((sender) => sender.type === type);
    const ops = typeSenders
        .filter(
            (sender) => sender.isRegisteredToSES || sender.isRegisteredToAligo
        )
        .map((sender) => ({
            label: sender.label || sender.sender,
            value: sender.sender,
        }));

    const defaultOp = NotificationDefaultSenderOp[type];
    ops.push(defaultOp);
    return ops;
};

export const useSenderOps = (
    type: NotificationMethod,
    senders: FnotificationManager_senders[]
) => {
    const ops = senderOpsByType(type, senders);
    const senderOpHook = useSelect(ops[0], ops);

    return { ...senderOpHook, option: ops };
};
