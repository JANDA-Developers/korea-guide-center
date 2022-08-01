import React from "react";

interface IProp {
    count?: number;
}

export const TotalViewer: React.FC<IProp> = ({ count = 0 }) => {
    return <div>총 {count}개</div>;
};
