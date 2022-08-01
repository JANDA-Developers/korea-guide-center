import { autoComma, JDtypho } from "@janda-com/front";
import React from "react";
import { Ftour } from "../../../types/api";

interface IProp {
    adult?: number | null;
    baby?: number | null;
    kid?: number | null;
}

export const TourPriceView: React.FC<IProp> = ({
    adult = 0,
    baby = 0,
    kid = 0,
}) => {
    return (
        <div>
            <JDtypho size="small" mb="small">
                성인: {autoComma(adult || 0)}
            </JDtypho>
            <JDtypho size="small" mb="small">
                소인: {autoComma(kid || 0)}
            </JDtypho>
            <JDtypho size="small">유아: {autoComma(baby || 0)}</JDtypho>
        </div>
    );
};
