import { toast, useInput } from "@janda-com/front";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../context/context";
import { Paths } from "../pages/index[depre]";
import { SignInInput, signIn_SignIn, UserRole } from "../types/api";
import { ifDev } from "../utils/dev/ifDev";
import { completeMsg, errorMessage } from "../utils/onCompletedMessage";
import { useSignIn } from "./useUser";

interface IConfig {
    onCompleted: (SignIn: signIn_SignIn) => void;
}

export type IUseLogin = ReturnType<typeof useLogin>;
export const useLogin = (config?: IConfig, role: UserRole = UserRole.GUIDE) => {
    const { s } = useContext(AppContext);
    const { onCompleted } = config || {};
    const emailHook = useInput(
        ifDev("colton159@naver.com") || localStorage.getItem("lastEmail") || ""
    );
    const passwordHook = useInput("");
    const router = useRouter();
    const [signInMu] = useSignIn({
        onError: (errorObject) => {
            toast.warn(s("checkIdAndPw"), {
                toastId: "UnkownErrorToast",
            });
        },
        onCompleted: async ({ SignIn }) => {
            localStorage.setItem("lastEmail", emailHook.value);
            if (onCompleted) {
                onCompleted(SignIn);
            } else if (completeMsg(SignIn, s("loginCompleted"))) {
                router.push(Paths.locationalGuide);
            }
        },
    });

    const handleSignIn = (input?: SignInInput) => {
        signInMu({
            variables: {
                input: {
                    email: emailHook.value,
                    password: passwordHook.value,
                    ...input,
                },
            },
        });
    };

    return { handleSignIn, passwordHook, emailHook };
};
