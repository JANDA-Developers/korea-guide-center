import React from "react";
import BookLayout from "../../component/layout/BookLayout";
import { MyOffers } from "../../page/my/Offer";

interface IProp {}

export const Myoffer: React.FC<IProp> = () => {
    if (typeof window === "undefined") return null;
    return (
        <BookLayout>
            <MyOffers />
        </BookLayout>
    );
};
export default Myoffer;
