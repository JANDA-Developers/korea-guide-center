import {
    Flex,
    getFromUrl,
    isEmpty,
    JDcard,
    JDcontainer,
    JDtypho,
    WindowSize,
} from "@janda-com/front";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Banner } from "../component/banner/Banner";
import { BookLayout } from "../component/layout/BookLayout";
import { AppContext } from "../context/context";
import { useLogin } from "../hook/useLogin";
import { useSortBanner } from "../page/homepage/hook/useSortBanner";
import { LoginForm } from "../page/login/LoginForm";
import { Paths } from "./index[depre]";

interface IProp {}

export const LoginPage: React.FC<IProp> = () => {
    const { s, alertModalHook, homepage } = useContext(AppContext);
    const { loginBannerImgs } = useSortBanner(homepage?.bannerImages || []);

    const rotuer = useRouter();
    if (typeof window === "undefined") return <div />;
    const loginHook = useLogin();
    const pageMode = getFromUrl("signUp");

    const bannerExsist = !isEmpty(loginBannerImgs);
    return (
        <BookLayout>
            <JDcontainer
                key={pageMode}
                verticalPadding
                size={bannerExsist ? WindowSize.md : WindowSize.sm}
            >
                <Flex oneone>
                    {/* <Banner
                        hide={isEmpty(loginBannerImgs)}
                        className="LoginBanner"
                        mb
                        bannerImages={loginBannerImgs}
                        ratio={0.75}
                    /> */}
                    <JDcard
                        mb
                        style={{ maxWidth: 500, margin: "0 auto" }}
                        mode="border"
                    >
                        <LoginForm key={rotuer.pathname} {...loginHook} />
                    </JDcard>
                </Flex>
                <Flex style={{ width: "100%" }} center>
                    <Link href={Paths.emailFind}>
                        <a>
                            <JDtypho size="tiny" mr hover>
                                {s("emailFind")}
                            </JDtypho>
                        </a>
                    </Link>
                    <Link href={Paths.pwFind}>
                        <a>
                            <JDtypho size="tiny" hover>
                                {s("pwFind")}
                            </JDtypho>
                        </a>
                    </Link>
                </Flex>
            </JDcontainer>
        </BookLayout>
    );
};

export default LoginPage;
