import {
    Bold,
    Flex,
    getFromUrl,
    JDbutton,
    JDcontainer,
    Mr,
} from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { Paths } from "../index[depre]";
import { BackStepBar } from "../../component/backstepBar/BackstepBar";
import { BookingViweDetail } from "../../component/bookingViewCard/BookingViewDetail";
import BookLayout from "../../component/layout/BookLayout";
import { UserProfileCardApi } from "../../component/userProfileCard/UserProfileCard";
import { AppContext } from "../../context/context";
import { useBookingFindById } from "../../hook/useBooking";
import { useStartChat } from "../../hook/useChatRoom";

interface IProp {}

export const Detail: React.FC<IProp> = () => {
    if (typeof window === "undefined") return null;
    const bookingId = getFromUrl("bookingId");
    const { s } = useContext(AppContext);
    const { item: booking } = useBookingFindById(bookingId);
    const { handleToChatRoomOrCreate } = useStartChat(
        booking?.guideId,
        booking?.guideNickName || undefined
    );

    if (!booking) return null;
    const { guideId, guideNickName } = booking;
    return (
        <BookLayout>
            <JDcontainer verticalPadding>
                <BackStepBar
                    mode="border"
                    mb
                    go={Paths.mybook}
                    label={s("myTravel")}
                />
                <BookingViweDetail booking={booking} />
            </JDcontainer>
            <Flex
                column
                vCenter
                center
                className="BookingViweDetail__guideInfo"
            >
                <Bold flex={{ vCenter: true, center: true }} mb>
                    {s("guide")}
                    {` `}
                    {guideNickName} <Mr />
                    <JDbutton
                        onClick={() => {
                            handleToChatRoomOrCreate();
                        }}
                        padding="small"
                        size="small"
                        mode="flat"
                        thema="primary"
                    >
                        {s("talkWith")}
                    </JDbutton>
                </Bold>
                <UserProfileCardApi userId={guideId} />
            </Flex>
        </BookLayout>
    );
};

export default Detail;
