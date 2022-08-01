import { Flex, InputText } from "@janda-com/front";
import { IInputTextCutsomProp } from "@janda-com/front/dist/components/InputText/InputText";
import React from "react";
import { CheckBtn, ICheckBtnProp } from "../checkBtn/CheckBtn";

interface IProp {
    inputProps: IInputTextCutsomProp;
    buttonProps: ICheckBtnProp;
}

export const InputWithCheckButton: React.FC<IProp> = ({
    inputProps,
    buttonProps,
}) => {
    return (
        <Flex mb oneone vEnd>
            <InputText autoComplete="off" mr {...inputProps} />
            <CheckBtn {...buttonProps} />
        </Flex>
    );
};
