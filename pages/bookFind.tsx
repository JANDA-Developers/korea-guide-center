import {
    InputText,
    JDbutton,
    JDcard,
    JDcontainer,
    toast,
    useInput,
    WindowSize,
} from "@janda-com/front";
import React, { useContext, useState } from "react";
import client from "../apollo/apolloClient";
import { BOOKING_FIND_BY_INFO } from "../apollo/gql/booking";
import { BookingViewCard } from "../component/bookingViewCard/BookingViewCard";
import { InputWithCheckButton } from "../component/InputWithCheckButton/InputWithCheckButton";
import BookLayout from "../component/layout/BookLayout";
import { CardHead } from "../component/modalHead/ModalHead";
import { AppContext } from "../context/context";
import {
    bookingFindByInfo,
    bookingFindByInfoVariables,
    Fbooking,
    VerificationEvent,
} from "../types/api";

interface IProp {}

export const BookFind: React.FC<IProp> = () => {
    const { verificationModalHook, verificationHook, s } =
        useContext(AppContext);
    const nameHook = useInput("");
    const phoneNumberHook = useInput("");
    const [bookings, setBookings] = useState<Fbooking[]>([]);

    const handleFind = async () => {
        const result = await client.query<
            bookingFindByInfo,
            bookingFindByInfoVariables
        >({
            query: BOOKING_FIND_BY_INFO,
            variables: {
                contact: phoneNumberHook.value,
                name: nameHook.value,
            },
        });
        const foundBookings = result.data.BookingFindByInfo || [];
        const noBooking = foundBookings.length < 1;

        if (noBooking)
            toast.warn(
                "예약하신 내역을 찾을 수 없습니다. 성함/전화번호 재확인 부탁드립니다."
            );
        else
            toast.success(
                `총 ${foundBookings.length}개의 예약을 조회하였습니다.`
            );

        setBookings([...foundBookings]);
    };

    return (
        <BookLayout>
            <JDcontainer size={WindowSize.md} verticalPadding>
                <JDcard
                    head={
                        <CardHead
                            title={s("bookFindTitle")}
                            description={s("bookFindDescription")}
                        />
                    }
                    mb
                    mode="border"
                >
                    <div>
                        <InputText mb label={s("name")} {...nameHook} />
                        <InputWithCheckButton
                            buttonProps={{
                                label: s("verification"),
                                disabled: phoneNumberHook.value?.length < 6,
                                onClick: () => {
                                    verificationModalHook.openModal({
                                        payload: phoneNumberHook.value,
                                        event: VerificationEvent.UserFindEmail,
                                    });
                                },
                            }}
                            inputProps={{
                                hyphen: true,
                                label: s("phoneNumber"),
                                ...phoneNumberHook,
                                onChange: (v) => {
                                    verificationHook.reset();
                                    phoneNumberHook.onChange(v);
                                },
                            }}
                        />
                        <JDbutton
                            mode="flat"
                            thema="primary"
                            size="long"
                            onClick={handleFind}
                            disabled={!verificationHook.verifiData?.isVerified}
                        >
                            {s("search")}
                        </JDbutton>
                    </div>
                </JDcard>
                {bookings?.map((bk) => (
                    <BookingViewCard mb key={bk._id} booking={bk} />
                ))}
            </JDcontainer>
        </BookLayout>
    );
};

export default BookFind;
