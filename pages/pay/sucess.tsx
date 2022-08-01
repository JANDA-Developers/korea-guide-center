import React from "react";
import BookLayout from "../../component/layout/BookLayout";
import { Sucess } from "../../page/pay/Sucess";

interface IProp {}

export const Sucesspage: React.FC<IProp> = () => {
    return (
        <BookLayout>
            <Sucess />
        </BookLayout>
    );
};
export default Sucesspage;
