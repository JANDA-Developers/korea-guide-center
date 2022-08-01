import { IUseModal, JDmodal } from "@janda-com/front";
import React from "react";
import { BookingViweDetail } from "../../../../component/bookingViewCard/BookingViewDetail";
import { ModalHead } from "../../../../component/modalHead/ModalHead";
import { useBookingFindById } from "../../../../hook/useBooking";

export interface IBookingViewModalInfo {
    bookingId: string;
    bookingCode?: string;
}

interface IProp {
    modalHook: IUseModal<IBookingViewModalInfo>;
}

export const BookingViewModal: React.FC<IProp> = ({ modalHook }) => {
    const bookingId = modalHook.info?.bookingId;
    const { item: booking } = useBookingFindById(bookingId);
    if (!booking) return null;

    return (
        <JDmodal
            {...modalHook}
            head={{
                element: (
                    <ModalHead
                        title="예약보기"
                        description="예약정보를 확인합니다"
                    />
                ),
            }}
        >
            <BookingViweDetail modalViewMode booking={booking} />
        </JDmodal>
    );
};
