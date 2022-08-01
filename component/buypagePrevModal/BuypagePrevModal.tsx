import { IUseModal, JDmodal } from "@janda-com/front";
import React from "react";
import { useIframeHeight } from "./useIframeHeight";

export interface IBuypagePrevModalInfo {
    buypageUrl: string;
}

interface IProp {
    modalHook: IUseModal<IBuypagePrevModalInfo>;
    buypageUrl?: string;
}

export const BuypagePrevModal: React.FC<IProp> = ({
    modalHook,
    buypageUrl = modalHook.info?.buypageUrl,
}) => {
    const { height } = useIframeHeight();
    if (!buypageUrl) return null;
    return (
        <JDmodal
            className="BuypagePrevModal"
            fullInMobile
            head={{ title: "주문페이지 미리보기" }}
            {...modalHook}
        >
            <iframe
                style={{
                    border: 0,
                    maxHeight: height,
                    height: height,
                    width: "100%",
                }}
                src={buypageUrl}
            />
        </JDmodal>
    );
};
