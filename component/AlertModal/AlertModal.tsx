import { IUseModal, JDbutton, JDmodal } from "@janda-com/front";
import { TElements } from "@janda-com/front/dist/types/interface";
import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import { ModalBtn } from "../btns/ModalBtn";

export interface IAlertModalInfo {
    title: TElements;
    content: TElements;
}

interface IProp extends IUseModal<IAlertModalInfo> {}

export const AlertModal: React.FC<IProp> = ({ info, ...props }) => {
    return (
        <JDmodal {...props} head={{ element: info?.title || "" }}>
            {info?.content}
        </JDmodal>
    );
};

export interface IConfirmModalInfo extends IAlertModalInfo {
    onContinue: () => void;
    onCancel?: () => void;
}
interface IConfirmModalProp extends IUseModal<IConfirmModalInfo> {}

export const ConfirmModal: React.FC<IConfirmModalProp> = ({
    info,
    ...props
}) => {
    if (!info) return null;
    const { s } = useContext(AppContext);
    const { content, onContinue, title, onCancel } = info;
    const handleCancel = () => {
        props.closeModal();
        onCancel?.();
    };
    const handleContinue = () => {
        props.closeModal();
        onContinue();
    };

    return (
        <JDmodal
            {...props}
            head={{ element: info?.title || "" }}
            foot={
                <div>
                    <ModalBtn thema="primary" onClick={handleContinue} mr>
                        {s("continue")}
                    </ModalBtn>
                    <ModalBtn thema="error" onClick={handleCancel}>
                        {s("cancel")}
                    </ModalBtn>
                </div>
            }
        >
            {info?.content}
        </JDmodal>
    );
};
