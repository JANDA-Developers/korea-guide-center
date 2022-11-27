import { getFromUrl, JDcard, JDcontainer } from "@janda-com/front";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { BankInfoInput } from "../../component/bankComponents/BankInfoInput";
import { BankHolderViewer } from "../../component/bankHolderViewer/BankHolderViewer";
import { BookingViweDetail } from "../../component/bookingViewCard/BookingViewDetail";
import { CardHead } from "../../component/modalHead/ModalHead";
import PhotoFrame from "../../component/photoFrame/PhotoFram";
import { AppContext } from "../../context/context";
import { useBookingFindById } from "../../hook/useBooking";
import { Paymethod } from "../../types/api";

interface IProp {}

export const Sucess: React.FC<IProp> = () => {
    if (typeof window === "undefined") return null;
    const { s } = useContext(AppContext);
    const booking = getFromUrl("bookingId");
    const { item } = useBookingFindById(booking);

    if (!item) return null;
    return (
        <JDcontainer verticalPadding>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                gtag('event', 'conversion', {'send_to': '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}/YvyVCMnB7IIYEPH7irMo'});`,
                    }}
                >
                    {" "}
                </script>
            </Head>
            <JDcard
                head={
                    <CardHead
                        title={s("bookingCompleted")}
                        description={s("bookingCompleted")}
                    />
                }
                mode="border"
                mb
            >
                <PhotoFrame src="/img/join_img01.png" />
            </JDcard>

            <BookingViweDetail booking={item} />
        </JDcontainer>
    );
};
