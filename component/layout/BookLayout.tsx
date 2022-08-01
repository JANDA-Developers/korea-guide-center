import React from "react";
import { BookFooter } from "./BookFooter";
import { BookHeader } from "./BookHeader";

interface IProp {
    layoutHide?: boolean;
}

export const BookLayout: React.FC<IProp> = ({ children, layoutHide }) => {
    if (layoutHide) return <div>{children}</div>;
    return (
        <div style={{ backgroundColor: "white" }} className="bookLayout">
            <BookHeader />
            <div>{children}</div>
            <BookFooter />
        </div>
    );
};

export default BookLayout;
