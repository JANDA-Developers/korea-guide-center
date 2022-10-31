import { JDtypho } from "@janda-com/front";
import React from "react";

interface IProp {
    priceOrigin: number;
    priceDiscounted: number;
}

export const DiscountViewer: React.FC<IProp> = ({
    priceDiscounted,
    priceOrigin,
}) => {
    const isDiscount = priceOrigin > priceDiscounted;
    if (!isDiscount) return null;
    const rate = priceDiscounted / priceOrigin;
    return (
        <div>
            <JDtypho>{priceOrigin}</JDtypho>
        </div>
    );
};
