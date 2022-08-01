import {
    Flex,
    JDbutton,
    JDcard,
    JDcontainer,
    JDtypho,
    useInput,
    WindowSize,
    InputText,
} from "@janda-com/front";
import React, { useContext } from "react";
import { BookLayout } from "../component/layout/BookLayout";
import { CardHead } from "../component/modalHead/ModalHead";
import { AppContext } from "../context/context";
import { useEmailFind } from "../hook/useUser";
import { completeMsg } from "../utils/onCompletedMessage";

interface IProp {}

export const EmailFind: React.FC<IProp> = () => {
    const { s, alertModalHook } = useContext(AppContext);
    const [emailFindMu] = useEmailFind({
        onCompleted: ({ UserFindEmail }) => {
            if (completeMsg(UserFindEmail, undefined, s("checkEmailAndName"))) {
                alertModalHook.openModal({
                    content: s("emailSendedByPhone"),
                    title: s("emailFind"),
                });
            }
        },
    });
    const phoneNumberHook = useInput("");
    const nameHook = useInput("");
    if (typeof window === "undefined") return <div>1</div>;
    return (
        <BookLayout>
            <JDcontainer verticalPadding size={WindowSize.sm}>
                <JDcard
                    head={
                        <CardHead
                            title={s("emailFind")}
                            description={s("emailFindDescription")}
                        />
                    }
                    style={{ maxWidth: 500, margin: "0 auto" }}
                    mode="border"
                >
                    <InputText
                        mb
                        label={s("phoneNumber")}
                        {...phoneNumberHook}
                    />
                    <InputText mb label={s("name")} {...nameHook} />
                    <JDbutton
                        mode="flat"
                        thema="primary"
                        size="long"
                        onClick={() => {
                            emailFindMu({
                                variables: {
                                    name: nameHook.value,
                                    phoneNumber: phoneNumberHook.value,
                                },
                            });
                        }}
                    >
                        {s("search")}
                    </JDbutton>
                </JDcard>
            </JDcontainer>
        </BookLayout>
    );
};
export default EmailFind;
