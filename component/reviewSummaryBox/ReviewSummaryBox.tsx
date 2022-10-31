import { Bold, IJDalignProp, JDalign, Small } from "@janda-com/front";
import React from "react";
import { Fproduct } from "../../types/api";
import { RatingStar } from "../rating/Rating";

interface IProp extends IJDalignProp {
    product: Fproduct;
}

export const ReviewSummaryBox: React.FC<IProp> = ({ product, ...props }) => {
    const { reviewCount, rating } = product;
    return (
        <JDalign {...props}>
            <Bold mb="no" size="h3">
                {rating?.toFixed(1)}
            </Bold>
            <RatingStar
                startProp={{ color: "grey5" }}
                readonly
                initialRating={rating || 5}
            />
            <Small color="grey2">후기 {reviewCount}개</Small>
        </JDalign>
    );
};
