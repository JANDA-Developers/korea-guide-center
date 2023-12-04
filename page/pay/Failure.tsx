import { getFromUrl, JDcard, JDcontainer } from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { BookingViweDetail } from "../../component/bookingViewCard/BookingViewDetail";
import { CardHead } from "../../component/modalHead/ModalHead";
import PhotoFrame from "../../component/photoFrame/PhotoFram";
import { AppContext } from "../../context/context";
import { useBookingFindById } from "../../hook/useBooking";

interface IProp {}

export const Failure: React.FC<IProp> = () => {
    if (typeof window === "undefined") return null;
    const { s } = useContext(AppContext);
    const errorMessage = getFromUrl("err");

    return (
        <JDcontainer verticalPadding>
            <JDcard
                head={
                    <CardHead
                        title={s("paymentFailed")}
                        description={s("paymentFailedDesc")}
                    />
                }
                mode="border"
                mb
            >
                {decodeURIComponent(errorMessage || "")}
            </JDcard>
        </JDcontainer>
    );
};
