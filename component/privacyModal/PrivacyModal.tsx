import {
    IUseModal,
    JDbutton,
    JDmodal,
    JDmodalConfigProps,
    JDpolicyViewer,
} from "@janda-com/front";
import { TElements } from "@janda-com/front/dist/types/interface";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { ModalBtn } from "../btns/ModalBtn";

export interface IPrivacyModalInfo extends JDmodalConfigProps {
    policy: TElements;
    onAgree: () => void;
}

interface IProp {
    modalHook: IUseModal<IPrivacyModalInfo>;
}

export const PrivacyModal: React.FC<IProp> = ({ modalHook }) => {
    if (typeof window === "undefined") return null;
    const { s } = useContext(AppContext);
    const { info } = modalHook;
    return (
        <JDmodal
            foot={
                <div>
                    <ModalBtn mr onClick={info?.onAgree} thema="primary">
                        {s("agreeAll")}
                    </ModalBtn>
                    <ModalBtn onClick={modalHook.closeModal}>
                        {s("close")}
                    </ModalBtn>
                </div>
            }
            {...modalHook}
            {...info}
        >
            <JDpolicyViewer>
                {" "}
                {typeof info?.policy === "string" ? (
                    <div
                        dangerouslySetInnerHTML={{
                            __html: info?.policy || "",
                        }}
                    ></div>
                ) : (
                    info?.policy
                )}
            </JDpolicyViewer>
        </JDmodal>
    );
};

export default PrivacyModal;
