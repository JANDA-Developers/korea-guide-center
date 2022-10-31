import React from "react";

interface IProp {
    children?: any;
}

const Introduce: React.FC<IProp> = ({ children }) => {
    return <div className="detailNavCard__introduce">{children}</div>;
};

const Introduce2: React.FC<IProp> = ({ children }) => {
    return <div className="detailNavCard__introduce2">{children}</div>;
};

export { Introduce, Introduce2 };
