import { InputText, Flex, JDalign, JDbutton, useInput } from "@janda-com/front";
import { IInputTextCutsomProp } from "@janda-com/front/dist/components/InputText/InputText";
import React from "react";

interface IProp {
    inputProp?: IInputTextCutsomProp;
    defaultValue?: any;
    onSubmit: (val: any) => void;
}

export const SubmitInput: React.FC<IProp> = ({
    inputProp,
    defaultValue,
    onSubmit,
}) => {
    const inputHook = useInput(defaultValue || "");
    return (
        <Flex vEnd>
            <InputText mr="small" {...inputHook} {...inputProp} />{" "}
            <JDbutton
                br="square"
                thema="black"
                mode="flat"
                onClick={() => {
                    onSubmit(inputHook.value);
                }}
            >
                제출
            </JDbutton>
        </Flex>
    );
};
