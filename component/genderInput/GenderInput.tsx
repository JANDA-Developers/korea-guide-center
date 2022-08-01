import { Flex, Gender, IJDalignProp, JDbutton } from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { RoundRadioBtnWrap } from "../iconRadioBtn/IconRadioBtn";

interface IProp extends IJDalignProp {
    value: Gender;
    setValue: (gender: Gender) => void;
}

export const GenderInput: React.FC<IProp> = ({ setValue, value, ...props }) => {
    const { s } = useContext(AppContext);
    return (
        <RoundRadioBtnWrap flex {...props}>
            <JDbutton
                onClick={() => {
                    setValue(Gender.MALE);
                }}
                mode={value === Gender.MALE ? "flat" : "border"}
                thema={value === Gender.MALE ? "primary" : undefined}
            >
                {s("male")}
            </JDbutton>
            <JDbutton
                onClick={() => {
                    setValue(Gender.FEMALE);
                }}
                mode={value === Gender.FEMALE ? "flat" : "border"}
                thema={value === Gender.FEMALE ? "primary" : undefined}
            >
                {s("female")}
            </JDbutton>
        </RoundRadioBtnWrap>
    );
};
