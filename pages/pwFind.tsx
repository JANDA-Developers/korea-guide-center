import {
    JDbutton,
    JDcard,
    JDcontainer,
    useInput,
    WindowSize,
    InputText,
} from "@janda-com/front";
import React, { useContext } from "react";
import { BookLayout } from "../component/layout/BookLayout";
import { CardHead } from "../component/modalHead/ModalHead";
import { AppContext } from "../context/context";
import { userUserFindPassword } from "../hook/useUser";
import { completeMsg } from "../utils/onCompletedMessage";

interface IProp {}

export const PwFind: React.FC<IProp> = () => {
    const { s, alertModalHook } = useContext(AppContext);
    const [pwFindMu] = userUserFindPassword({
        onCompleted: ({ UserFindPassword }) => {
            if (
                completeMsg(UserFindPassword, undefined, s("checkEmailAndName"))
            ) {
                alertModalHook.openModal({
                    content: s("pwSendedByEmail"),
                    title: s("pwFind"),
                });
            }
        },
    });
    const emailFindHook = useInput("");
    const nameHook = useInput("");
    if (typeof window === "undefined") return <div>1</div>;
    return (
        <BookLayout>
            <JDcontainer verticalPadding size={WindowSize.sm}>
                <JDcard
                    head={
                        <CardHead
                            title={s("pwFind")}
                            description={s("pwFindDescription")}
                        />
                    }
                    style={{ maxWidth: 500, margin: "0 auto" }}
                    mode="border"
                >
                    <InputText mb label={s("email")} {...emailFindHook} />
                    <InputText mb label={s("name")} {...nameHook} />
                    <JDbutton
                        mode="flat"
                        thema="primary"
                        size="long"
                        onClick={() => {
                            pwFindMu({
                                variables: {
                                    email: emailFindHook.value,
                                    name: nameHook.value,
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
export default PwFind;
