import React from "react";

interface IProp {
    label: string;
    link: string;
}

export const IndexNavBox: React.FC<IProp> = ({ label, link }) => {
    return <div className="IndexNavBox">{label}</div>;
};
