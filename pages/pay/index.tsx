import dynamic from "next/dynamic";
import React from "react";
import BookLayout from "../../component/layout/BookLayout";
const Pay = dynamic(() => import("../../page/pay/Pay"), {
    ssr: false,
});

interface IProp {}

export const Paypage: React.FC<IProp> = () => {
    return (
        <BookLayout>
            <Pay />
        </BookLayout>
    );
};

export default Paypage;
