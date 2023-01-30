import { getFromUrl, JDbutton, JDtypho } from "@janda-com/front";
import { ISpan } from "@janda-com/front/dist/types/interface";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { SERVER_URI } from "../../apollo/uri";
import { JDicon } from "../../component/icons/Icons";
import { AppContext } from "../../context/context";
import { removeUrlParameter } from "../../utils/url";

interface IProp {
    signUpMode?: boolean;
    onEamilClick: () => void;
}

export const OauthBtns: React.FC<IProp> = ({ onEamilClick, signUpMode }) => {
    const { s } = useContext(AppContext);
    const toCompnanyloginPage =
        (company: "kakao" | "google" | "naver") => () => {
            const changed = SERVER_URI.replace("/graphql", "").replace(
                "graphql",
                ""
            );
            location.href = changed + "/login/" + company;
        };

    useEffect(() => {
        const oauthCompany = getFromUrl("oauthCompany");
        if (oauthCompany) {
            const next = removeUrlParameter(location.href, "oauthCompany");
            window.history.pushState("", "login", next);
            const target = document.getElementById(oauthCompany + "LoginBtn");
            if (target) {
                target.click();
            }
        }
    });
    return (
        <div className="oauthBtns">
            <div style={{ display: "none" }}>
                <img src="https://naver.com" />
                <img src="https://google.com" />
                <img src="https://kakao.com" />
            </div>

            <div>
                <JDbutton
                    mb
                    id="EmailLoginBtn"
                    thema="grey2"
                    className="oauthBtns__btn"
                    br="square"
                    mode="border"
                    size="large"
                    onClick={onEamilClick}
                >
                    <JDicon mr icon="@" />
                    {signUpMode ? s("emailSignUp") : s("emailLogin")}
                </JDbutton>
            </div>
            <div>
                <JDbutton
                    mb
                    id="GOOGLELoginBtn"
                    thema="grey2"
                    className="oauthBtns__btn"
                    br="square"
                    mode="border"
                    size="large"
                    onClick={toCompnanyloginPage("google")}
                >
                    <GoogleIcon className="oauthBtns__icon" />
                    {signUpMode ? s("googleSignUp") : s("googlelogin")}
                </JDbutton>
            </div>
            <div>
                <JDbutton
                    mb
                    id="KAKAOLoginBtn"
                    br="square"
                    thema="grey2"
                    mode="border"
                    size="large"
                    className="oauthBtns__btn"
                    onClick={toCompnanyloginPage("kakao")}
                >
                    <KaKaoIcon className="oauthBtns__icon" />
                    {signUpMode ? s("kakaoSignUp") : s("kakaologin")}
                </JDbutton>
            </div>
            <div>
                <JDbutton
                    id="NAVERLoginBtn"
                    mb
                    thema="grey2"
                    className="oauthBtns__btn"
                    br="square"
                    mode="border"
                    size="large"
                    onClick={toCompnanyloginPage("naver")}
                >
                    <NaverIcon className="oauthBtns__icon" />
                    {signUpMode ? s("naverSignUp") : s("naverlogin")}
                </JDbutton>
            </div>
        </div>
    );
};

const GoogleIcon = (props: ISpan) => {
    return (
        <span {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208 212.3">
                <defs>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: ".cls-1{fill:#3e82f1;}.cls-1,.cls-2,.cls-3,.cls-4{fill-rule:evenodd;}.cls-2{fill:#32a753;}.cls-3{fill:#f9bb00;}.cls-4{fill:#e74133;}",
                        }}
                    />
                </defs>
                <path
                    className="cls-1"
                    d="M1064.11,502.51a121.54,121.54,0,0,0-1.93-21.72h-100v41.06h57.13a48.82,48.82,0,0,1-21.18,32v26.64h34.3c20.07-18.48,31.65-45.7,31.65-78Z"
                    transform="translate(-856.06 -393.95)"
                />
                <path
                    className="cls-2"
                    d="M962.21,606.24c28.66,0,52.69-9.5,70.25-25.71l-34.3-26.64c-9.51,6.37-21.67,10.14-35.95,10.14-27.65,0-51.05-18.68-59.39-43.77H867.35v27.51a106.12,106.12,0,0,0,94.86,58.47Z"
                    transform="translate(-856.06 -393.95)"
                />
                <path
                    className="cls-3"
                    d="M902.82,520.26a62.72,62.72,0,0,1,0-40.33V452.42H867.35a106.31,106.31,0,0,0,0,95.35l35.47-27.51Z"
                    transform="translate(-856.06 -393.95)"
                />
                <path
                    className="cls-4"
                    d="M962.21,436.16c15.59,0,29.58,5.36,40.58,15.88l30.44-30.45c-18.38-17.13-42.41-27.64-71-27.64a106.12,106.12,0,0,0-94.86,58.47l35.47,27.51c8.34-25.09,31.74-43.77,59.39-43.77Z"
                    transform="translate(-856.06 -393.95)"
                />
            </svg>
        </span>
    );
};

const NaverIcon = (props: ISpan) => {
    return (
        <span {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 392.26 359.4">
                <defs>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: ".cls-6{fill:#1ec800;}",
                        }}
                    />
                </defs>
                <polygon
                    className="cls-6"
                    points="258.46 181.34 134.28 0 0 0 0 359.39 133.82 359.39 133.82 178.06 258.03 359.39 392.26 359.39 392.26 0 258.46 0 258.46 181.34"
                />
            </svg>
        </span>
    );
};

const KaKaoIcon = (props: ISpan) => {
    return (
        <span {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 386.06 354.67">
                <defs>
                    <style
                    // dangerouslySetInnerHTML={{
                    //     __html: ".cls-5{fill:#989898;}",
                    // }}
                    />
                </defs>
                <path
                    className="cls-5"
                    d="M921.39,452l-12.94,36.92h26.28l-12.92-36.88C921.66,452.05,921.54,452,921.39,452Z"
                    transform="translate(-767.1 -322.39)"
                />
                <path
                    className="cls-5"
                    d="M960.13,322.39c-106.61,0-193,68.32-193,152.6,0,54.86,36.62,102.93,91.57,129.83-4,15.08-14.62,54.62-16.74,63.07-2.61,10.5,3.85,10.36,8.08,7.53,3.32-2.21,52.9-35.91,74.29-50.46a244.43,244.43,0,0,0,35.83,2.64c106.61,0,193-68.34,193-152.61S1066.74,322.39,960.13,322.39Zm-95,194.48a9.39,9.39,0,0,1-9.35,9.37h-2a9.41,9.41,0,0,1-9.37-9.37V449.25H826a9.6,9.6,0,0,1,0-19.2h56.45a9.6,9.6,0,1,1,0,19.2H865.12Zm92.41,8.87a9.34,9.34,0,0,1-11.9-5.71l-4.78-13.66H902.34L897.56,520A9.33,9.33,0,1,1,880,513.84l27.67-74.19a12.07,12.07,0,0,1,.53-1.27c1.13-5.49,6.81-9.69,13.68-9.69,6.19,0,11.38,3.42,13.18,8.11l.09.08,28.14,77A9.34,9.34,0,0,1,957.53,525.74Zm60.58-.13H979.75a8.71,8.71,0,0,1-8.72-8.72,8.27,8.27,0,0,1,.17-1.66,10.16,10.16,0,0,1-.17-1.67V439.12a10.42,10.42,0,1,1,20.83,0v69.06h26.25a8.72,8.72,0,0,1,0,17.43Zm82-1.22a9.3,9.3,0,0,1-13-1.85l-27.67-36.31-6,5.94v23.68a10.42,10.42,0,0,1-20.83,0V439.12a10.42,10.42,0,1,1,20.83,0v27.13l32.72-32.72a9.17,9.17,0,0,1,13,13l-26.43,26.44L1102,511.35A9.31,9.31,0,0,1,1100.14,524.39Z"
                    transform="translate(-767.1 -322.39)"
                />
            </svg>
        </span>
    );
};
