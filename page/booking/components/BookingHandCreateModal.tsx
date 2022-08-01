import { IUseModal, JDmodal } from "@janda-com/front";
import React from "react";
import { ModalHead } from "../../../component/modalHead/ModalHead";

export interface BookingHandCreateModalInfo {}

interface IProp {
    modalHook: IUseModal<BookingHandCreateModalInfo>;
}

export const BookingHandCreateModal: React.FC<IProp> = ({ modalHook }) => {
    return (
        <JDmodal
            head={{
                element: (
                    <ModalHead
                        title="예약 수기등록하기"
                        description="예약을 수기로 입력 하실 수 있습니다"
                    />
                ),
            }}
            {...modalHook}
        ></JDmodal>
    );
};
