import React from "react";
import BookLayout from "../../component/layout/BookLayout";
import { WishPage } from "../../page/my/Wish";

interface IProp {}

export const Wish: React.FC<IProp> = () => {
    if (typeof window === "undefined") return null;
    return (
        <div>
            <BookLayout>
                <WishPage />
            </BookLayout>
        </div>
    );
};

export default Wish;
