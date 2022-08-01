import { IUseModal, JDmodal, JDmodalConfigProps } from "@janda-com/front";
import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import { useLogin } from "../../hook/useLogin";
import { LoginForm } from "../../page/login/LoginForm";
import { ModalBtn } from "../btns/ModalBtn";
import { ModalHead } from "../modalHead/ModalHead";

export interface ILogiModalInfo {
    unLoginContinue?: () => void;
    sucessCallBack?: () => void;
    modalProps?: Partial<JDmodalConfigProps>;
}

interface IProp {
    modalHook: IUseModal<ILogiModalInfo>;
}

export const LogiModal: React.FC<IProp> = ({ modalHook }) => {
    if (typeof window === "undefined") return null;
    const { s } = useContext(AppContext);
    const loginHook = useLogin({
        onCompleted: ({ ok }) => {
            if (ok) {
                modalHook.info?.sucessCallBack?.();
            }
        },
    });
    const { info } = modalHook;
    return (
        <JDmodal
            head={{
                element: (
                    <ModalHead
                        title={s("login")}
                        description={s("pleaseLoginDesc")}
                    />
                ),
            }}
            foot={
                <div>
                    <ModalBtn
                        hide={!info?.unLoginContinue}
                        onClick={() => {
                            info?.unLoginContinue?.();
                            modalHook.closeModal();
                        }}
                        mode="border"
                        size="long"
                    >
                        {s("useAsAnonymouse")}
                    </ModalBtn>
                </div>
            }
            {...info}
            {...info?.modalProps}
            {...modalHook}
        >
            <LoginForm {...loginHook} />
        </JDmodal>
    );
};

export default LogiModal;
