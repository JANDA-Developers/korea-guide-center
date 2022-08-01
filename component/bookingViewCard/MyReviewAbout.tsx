import { Bold, JDbutton, useModal } from "@janda-com/front";
import React from "react";
import { Empty } from "../../atom/Empty";
import { useReviewList } from "../../hook/useReview";
import { useTourFindById } from "../../hook/useTour";
import { IReviewModalInfo, ReviewModalWrap } from "../ReviewModal/ReviewModal";
import { ReviewBoxs } from "../reviewBox/ReviewBoxs";
import DotButton from "../dotButton/DotButton";
import { useContext } from "react";
import { AppContext } from "../../context/context";

interface IProp {
    tourCode: string;
    tourId: string;
}

export const MyReviewAbout: React.FC<IProp> = ({ tourId, tourCode }) => {
    const reviewModalHook = useModal<IReviewModalInfo>();
    const { s } = useContext(AppContext);
    const { items } = useReviewList({
        fixingFilter: {
            tourCode__eq: tourCode,
        },
    });
    const { item: tour } = useTourFindById(tourId);

    const handleCreateReview = () => {
        reviewModalHook.openModal({ tour: tour });
    };

    return (
        <div>
            <Empty empty={items}>
                <Bold mb>{s("plesaeWriteReview")}</Bold>
                <DotButton onClick={handleCreateReview}>
                    {s("reviewWrite")}
                </DotButton>
            </Empty>
            <ReviewBoxs
                reviewControlModalHook={reviewModalHook}
                reviews={items}
            />
            <ReviewModalWrap
                key={reviewModalHook.info?.tour?._id}
                modalHook={reviewModalHook}
            />
        </div>
    );
};
