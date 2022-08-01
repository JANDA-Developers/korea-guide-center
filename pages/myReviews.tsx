import { Bold, JDcontainer, useModal } from "@janda-com/front";
import React, { useContext } from "react";
import { Empty } from "../atom/Empty";
import BookLayout from "../component/layout/BookLayout";
import { ReviewBoxsWithApi } from "../component/reviewBox/ReviewBoxs";
import {
    IReviewModalInfo,
    ReviewModalWrap,
} from "../component/ReviewModal/ReviewModal";
import { AppContext } from "../context/context";
import { MyChatRooms } from "../page/my/ChatRooms";

interface IProp {}

export const MyReviews: React.FC<IProp> = () => {
    const { s, me } = useContext(AppContext);
    const reviewModalHook = useModal<IReviewModalInfo>();

    if (typeof window === "undefined") return null;
    return (
        <BookLayout>
            <JDcontainer className="myReviews" verticalPadding>
                <Bold size="h6">{s("review")}</Bold>
                <ReviewBoxsWithApi
                    reviewControlModalHook={reviewModalHook}
                    className="myReviews__reviewBox"
                    queryParam={{
                        fixingFilter: {
                            reviewerId__eq: me?._id,
                        },
                    }}
                />
            </JDcontainer>
            <ReviewModalWrap
                key={
                    // @ts-ignore
                    reviewModalHook.info?.tourId + reviewModalHook.isOpen
                        ? "Opend"
                        : "closed"
                }
                modalHook={reviewModalHook}
            />
        </BookLayout>
    );
};

export default MyReviews;
