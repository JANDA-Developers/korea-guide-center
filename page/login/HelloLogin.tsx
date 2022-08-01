import { JDtypho } from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";

interface IProp {}

export const HelloLogin: React.FC<IProp> = () => {
    const { s } = useContext(AppContext);
    return (
        <div>
            <JDtypho weight={600} mb size="h6">
                Welcome!
            </JDtypho>
            <JDtypho mb>{s("loginWeleComeMessage")}</JDtypho>
        </div>
    );
};

export const HelloJoin: React.FC<IProp> = () => {
    const { s } = useContext(AppContext);
    return (
        <div>
            <JDtypho weight={600} mb size="h6">
                {s("signUpWeleComeTitle")}
            </JDtypho>
            <JDtypho mb>{s("signUpWeleComeMessage")}</JDtypho>
        </div>
    );
};
