import { IUseModal, JDmodal } from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { useBookingList } from "../../hook/useBooking";
import { BookingTable } from "../../page/booking/components/BookingTable";
import GuideContext from "../../page/context";
import { Fbooking, _BookingSort } from "../../types/api";
import { ModalBtn } from "../btns/ModalBtn";
import { useCheckBoxTable } from "../table/hook";

export interface IBookingSearchModalInfo {
    onSubmit: (booking: Fbooking[]) => void;
    listVarialbes?: Parameters<typeof useBookingList>;
}

interface IProp {
    modalHook: IUseModal<IBookingSearchModalInfo>;
}

export const BookingSearchModal: React.FC<IProp> = ({ modalHook }) => {
    const {} = useContext(GuideContext);
    const onSubmit = modalHook.info?.onSubmit;
    const bookingListHook = useBookingList(
        {
            fixingFilter: {},
            ...modalHook.info?.listVarialbes?.[0],
            initialSort: [_BookingSort.createdAt__desc],
            initialViewCount: 100,
        },
        { skipInit: true, ...modalHook.info?.listVarialbes?.[1] }
    );

    const { items: bookings, pageInfo, paginatorHook } = bookingListHook;
    const checkTableHook = useCheckBoxTable(
        [],
        bookings.map((item) => item._id)
    );

    const handleSubmit = () => {
        const selectedItems = bookings.filter((item) =>
            checkTableHook.checkedIds.includes(item._id)
        );
        onSubmit?.(selectedItems);
        modalHook.closeModal();
    };

    return (
        <JDmodal
            fullInMobile
            head={{
                title: "원하는 주문 대상 찾기",
            }}
            foot={
                <ModalBtn size="long" onClick={handleSubmit} thema="primary">
                    선택 제출하기
                </ModalBtn>
            }
            {...modalHook}
        >
            <BookingTable
                paginationHook={paginatorHook}
                key={bookings.length}
                {...checkTableHook}
                bookings={bookings}
            />
        </JDmodal>
    );
};
