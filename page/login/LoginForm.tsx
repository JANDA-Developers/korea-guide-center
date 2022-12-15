import {
    Flex,
    getFromUrl,
    InputText,
    JDalign,
    JDbutton,
    JDcard,
    JDtypho,
    Small,
    Tiny,
} from "@janda-com/front";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../../context/context";
import { IUseLogin, useLogin } from "../../hook/useLogin";
import { Paths } from "../../pages/index[depre]";
import { whenEnter } from "../../utils/whenEnter";
import { HelloJoin, HelloLogin } from "./HelloLogin";
import { OauthBtns } from "./Oauth";

interface IProp extends IUseLogin {}

export const LoginForm: React.FC<IProp> = ({
    handleSignIn,
    emailHook,
    passwordHook,
}) => {
    const { s } = useContext(AppContext);
    const urlEmail = getFromUrl("email");
    const router = useRouter();
    const signUp = router.query?.signUp;

    const [signUpMode, setSignUpMode] = useState(!!signUp);
    const [oauthMode, setOauthMode] = useState(true);

    useEffect(() => {
        emailHook.onChange(urlEmail);
        setSignUpMode(!!signUp);
        console.log(signUpMode);
    }, [urlEmail, signUp]);

    return (
        <JDalign text="center">
            {signUpMode ? <HelloJoin /> : <HelloLogin />}
            <JDalign mb hide={oauthMode}>
                <InputText mb label={s("email")} {...emailHook}></InputText>
                <InputText
                    mb
                    label={s("password")}
                    type="password"
                    {...passwordHook}
                    onKeyPress={whenEnter(() => {
                        const loginBtn = document.getElementById("SignInBtn");
                        if (loginBtn) {
                            loginBtn.click();
                        }
                    })}
                />
                <JDbutton
                    br="square"
                    size="long"
                    thema="primary"
                    mb
                    id="SignInBtn"
                    mode="flat"
                    onClick={() => {
                        if (signUpMode) router.push(Paths.signUp);
                        else
                            handleSignIn({
                                email: emailHook.value,
                                password: passwordHook.value,
                            });
                    }}
                    label={s("emailLogin")}
                />
            </JDalign>
            <JDalign mb hide={!oauthMode}>
                <OauthBtns
                    signUpMode={signUpMode}
                    onEamilClick={() => {
                        if (signUpMode) {
                            router.push(Paths.signUp);
                        }
                        setOauthMode(false);
                    }}
                />
            </JDalign>

            <Small text="center">
                <Flex vCenter center>
                    <JDalign mr className="textTransformClear">
                        {signUpMode
                            ? s("toSignUpMessage")
                            : s("toLoginMessage")}
                    </JDalign>
                    <JDtypho
                        hover
                        weight={600}
                        color="grey3"
                        onClick={() => {
                            setOauthMode(true);
                            setSignUpMode(!signUpMode);
                        }}
                    >
                        {signUpMode ? s("login") : s("signUp")}
                    </JDtypho>
                </Flex>
            </Small>
        </JDalign>
    );
};
