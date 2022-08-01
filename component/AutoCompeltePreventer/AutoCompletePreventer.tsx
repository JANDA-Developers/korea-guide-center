import React from "react";

interface IProp {}

export const AutoCompeletePreventer: React.FC<IProp> = () => {
    return (
        <input
            type="email"
            style={{ opacity: 0, height: 1, width: 1, position: "absolute" }}
        />
    );
};
