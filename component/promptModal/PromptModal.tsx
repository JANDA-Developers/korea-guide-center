import { InputText, IUseModal, JDmodal, useInput } from "@janda-com/front";
import { IInputTextCutsomProp } from "@janda-com/front/dist/components/InputText/InputText";
import { TElements } from "@janda-com/front/dist/types/interface";
import React from "react";
import { ModalBtn } from "../btns/ModalBtn";

export interface IPromptModalInfo {
    titleElement?: TElements;
    title?: string;
    defaultValue?: string;
    messageLabel?: string;
    callBack: (message: string) => void;
    inputProps?: Partial<IInputTextCutsomProp>;
    [key: string]: any;
}

export interface IPomptModalProps {
    modalHook: IUseModal<IPromptModalInfo>;
}
export const PormptModal: React.FC<IPomptModalProps> = ({
    modalHook,
    children,
}) => {
    const {
        callBack,
        titleElement,
        messageLabel,
        title,
        defaultValue = "",
        inputProps,
    } = modalHook.info || {};
    const inputHook = useInput(defaultValue);

    const handleOk = () => {
        callBack!(inputHook.value);
    };

    return (
        <JDmodal
            className="promptModal"
            head={{
                title,
                element: titleElement,
            }}
            foot={
                <div>
                    <ModalBtn
                        thema="primary"
                        onClick={handleOk}
                        mr
                        label="확인"
                    />
                    <ModalBtn onClick={modalHook.closeModal} label="취소" />
                </div>
            }
            {...modalHook}
        >
            {children}
            <InputText
                {...inputHook}
                label={messageLabel}
                textarea
                {...inputProps}
            />
        </JDmodal>
    );
};
