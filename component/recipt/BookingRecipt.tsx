import { ISet } from "@janda-com/front/dist/types/interface";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Fbooking } from "../../types/api";
import { yyyymmdd } from "../../utils/dateFormat";
import { WindowPortal } from "../../utils/windowPortal";
import { ITableInfo } from "./components/TableRender";
import CardRecipt from "./CreditCardReceipt";

interface IProp {
    isOpen: boolean;
    setOpen: ISet<boolean>;
    booking: Fbooking;
}

export const BookingRecipt: React.FC<IProp> = ({
    isOpen,
    setOpen,
    booking,
}) => {
    if (!isOpen) return null;
    const { l } = useContext(AppContext);
    const { tourTitle, buyerName, buyerEmail, buyerPhone } = booking;

    const approveTable: ITableInfo[] = [
        {
            title: "제공자정보",
            infos: [
                [
                    {
                        label: "제공",
                        value: "KOREA GUIDE",
                    },
                    {
                        label: "연락처",
                        value: "1833-4157",
                    },
                ],
                [
                    {
                        label: "CEO",
                        value: "최성희",
                    },
                    {
                        label: "주소",
                        value: "Bongnaenaru-ro, Yeongdo-gu, Busan, Republic of Korea",
                    },
                ],
            ],
        },

        {
            title: "결제정보",
            infos: [
                [
                    {
                        label: "결제수단",
                        value: "빌링결제",
                    },
                    {
                        label: "결제금액",
                        value: booking.paidPrice,
                    },
                ],
            ],
        },
        {
            title: "상품정보",
            infos: [
                [
                    {
                        label: "상품명",
                        value: l(tourTitle),
                    },
                    {
                        label: "투어일",
                        value: yyyymmdd(booking.tourStart),
                    },
                ],
            ],
        },
        {
            title: "고개정보",
            infos: [
                [
                    {
                        label: "주문자명",
                        value: buyerName,
                    },
                    {
                        label: "주문자연락처",
                        value: buyerEmail,
                    },
                ],
            ],
        },
    ];

    return (
        <WindowPortal
            openParam={{
                left: 100,
                top: 100,
                height: 600,
                width: 500,
            }}
            closeWindowPortal={() => {
                setOpen(false);
            }}
        >
            <CardRecipt approveTable={approveTable} />
        </WindowPortal>
    );
};
