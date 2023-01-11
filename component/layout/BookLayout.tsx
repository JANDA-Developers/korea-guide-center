import React from "react";
import { BookHeader } from "./BookHeader";
import Footer from "../../component/layout/components/Footer/Footer";

interface IProp {
    layoutHide?: boolean;
}

export const BookLayout: React.FC<IProp> = ({ children, layoutHide }) => {
    if (layoutHide) return <div>{children}</div>;
    return (
        <div style={{ backgroundColor: "white" }} className="bookLayout">
            {/* Header */}
            <BookHeader />
            <div>{children}</div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default BookLayout;
