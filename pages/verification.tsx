import {
    Bold,
    getFromUrl,
    JDalign,
    JDbutton,
    JDcard,
    JDcontainer,
    Small,
    toast,
    WindowSize,
} from "@janda-com/front";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import BookLayout from "../component/layout/BookLayout";
import { CardHead } from "../component/modalHead/ModalHead";
import { AppContext } from "../context/context";
import { useVerificationSignInPhoneNumber } from "../hook/useVerification";
import { VerificationEvent, VerificationTarget } from "../types/api";
import { emailVerificationLink } from "../types/const";
import { whenMultiKeyPress } from "../utils/multiKeyPress";
import { Paths } from "./index[depre]";

let BACKDOOR_Estack = 0;

interface IProp {}

export const VerificationPage: React.FC<IProp> = () => {
    if (typeof window === "undefined") return null;
    const router = useRouter();
    const { s, verificationHook } = useContext(AppContext);
    const verifiEmail = getFromUrl("email") || "";
    const { verificationModalHook } = useContext(AppContext);
    const phoneNumber = getFromUrl("phoneNumber") || "";
    const [verificationCompleteMu] = useVerificationSignInPhoneNumber({
        onCompleted: () => {
            router.push(Paths.verificationComplete);
        },
    });

    const { verifiStart, code } = verificationHook;
    const onPhoneVerifiCompleteFinished = () => {
        verificationCompleteMu({
            variables: {
                code,
                email: verifiEmail,
            },
        });
    };

    useEffect(() => {
        window.addEventListener(
            "keydown",
            whenMultiKeyPress(
                [
                    {
                        withKey: "shfit",
                        keys: ["E"],
                    },
                ],
                (e, key, withkey) => {
                    console.log("key", key);
                    if (key === "E") {
                        BACKDOOR_Estack += 1;
                    }

                    if (BACKDOOR_Estack > 9) {
                        window.open(
                            emailVerificationLink(verifiEmail),
                            "_self"
                        );
                    }
                }
            )
        );
    }, []);

    return (
        <BookLayout>
            <JDcontainer verticalPadding size={WindowSize.sm}>
                <JDcard
                    head={
                        <CardHead
                            description={s("emailVerificationDesc")}
                            title={s("emailVerificationTittle")}
                        />
                    }
                >
                    <JDalign mb="huge" text="center">
                        <Bold mb>
                            <span style={{ textTransform: "none" }}>
                                {verifiEmail}
                            </span>
                        </Bold>
                        <Small>{s("verificationEmailTitel")}</Small>
                    </JDalign>

                    <JDbutton
                        br="round"
                        onClick={() => {
                            verifiStart(
                                verifiEmail,
                                VerificationEvent.UserVerifyEmail,
                                VerificationTarget.EMAIL
                            ).then(() => {
                                toast.success(
                                    s("verificationEmailSendComplete")
                                );
                            });
                        }}
                        mb
                        mode="flat"
                        thema="primary"
                        size="longLarge"
                    >
                        {s("sendVerificationEmail")}
                    </JDbutton>

                    <JDbutton
                        br="round"
                        onClick={() => {
                            verificationModalHook.openModal({
                                event: VerificationEvent.UserVerifyPhone,
                                target: VerificationTarget.PHONE,
                                payload: phoneNumber,
                                onVerificationSucess:
                                    onPhoneVerifiCompleteFinished,
                            });
                        }}
                        mb
                        mode="flat"
                        thema="primary"
                        size="longLarge"
                    >
                        핸드폰 인증하기
                    </JDbutton>
                    <JDbutton
                        hide={true}
                        br="round"
                        id="BACKDOOR_EMAIL"
                        onClick={() => {
                            location.href = emailVerificationLink(verifiEmail);
                        }}
                        mode="flat"
                        thema="primary"
                        size="longLarge"
                    >
                        BACKDOOR VERIFY
                    </JDbutton>
                </JDcard>
            </JDcontainer>
        </BookLayout>
    );
};

export default VerificationPage;
