import { IUseModal, JDmodal, JDpolicyViewer } from "@janda-com/front";
import React from "react";
import { Info } from "../../../atom/Info";
import { notificationHistory_NotificationHistory_items } from "../../../types/api";

export interface ISmsHistoryModalInfo {
    history: notificationHistory_NotificationHistory_items;
}

interface IProp {
    modalHook: IUseModal<ISmsHistoryModalInfo>;
}

export const SmsHistoryDetailModal: React.FC<IProp> = ({ modalHook }) => {
    const { info } = modalHook;
    const {
        content,
        title,
        count,
        createdAt,
        errorCount,
        method,
        pointConsumed,
        pointRemains,
        receivers,
        sender,
        successCount,
        updatedAt,
    } = info?.history || {};
    return (
        <JDmodal {...modalHook} head={{ title: "SMS 발신 내역 자세히보기" }}>
            <JDpolicyViewer>
                <div
                    dangerouslySetInnerHTML={{
                        __html: content || "",
                    }}
                />
            </JDpolicyViewer>
        </JDmodal>
    );
};
