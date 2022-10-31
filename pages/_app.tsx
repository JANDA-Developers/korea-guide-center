import "../utils/polifill";
import React from "react";
import lazy from "next/dynamic";
import "dayjs/locale/ko";
import dayjs from "dayjs";
import { ApolloProvider } from "@apollo/client";
import Router, { useRouter } from "next/router";
import { pageLoadingEffect } from "../utils/query";
import Head from "next/head";
import apolloClient from "../apollo/apolloClient";
import "../scss/all.scss";
import { useInit } from "../hook/useInit";
import { AppContext, useAppContext } from "../context/context";
import { ReactTooltip, Toast, useModal } from "@janda-com/front";
import { useState } from "react";
import { useEffect } from "react";
import useRouterScroll from "../hook/useRouterScroll";
import { isIE } from "../utils/isIE";
import { useGa4Next } from "../hook/useGa4Next";
import { useDummyLogin } from "../hook/useDummyLogin";
import { consoleCover } from "../utils/console-config";
import { RecoilRoot } from "recoil";

const PrivacyModal = lazy(
    () => import("../component/privacyModal/PrivacyModal")
);
const LogiModal = lazy(() => import("../component/loginModal/LoginModal"));
const LanguageSelectModal = lazy(
    () => import("../component/languageSelectModal/LnaugageSelectModal")
);
const BookingCancelModal = lazy(
    () => import("../component/bookingControlModal/BookingCancelModal")
);
const VerificationModal = lazy(
    () => import("../component/verfi/VerificationModal")
);
const SystemModals = lazy(
    () => import("../component/systemicModals/SystemModals")
);

const ImageCropModal = lazy(
    () => import("../component/imageCropper/ImageCropperModal")
);
const TravlerFormModal = lazy(
    () => import("../component/traveler/TravlerFormModal")
);

Router.events.on("routeChangeStart", () => {
    pageLoadingEffect(true, "page");
});
Router.events.on("routeChangeComplete", () => {
    pageLoadingEffect(false, "page");
});
Router.events.on("routeChangeError", () => {
    pageLoadingEffect(false, "page");
});

export type TProductGrop = {};

const ComponentDefaultLayout: React.FC = (any: any) => <div {...any} />;

function App({ Component, pageProps }: any) {
    const [isMobile, setIsMobile] = useState(false);
    const { locale } = useRouter();
    const intiialInfomation = useInit();

    useGa4Next();
    const {
        policyModalHook,
        loginModalHook,
        imageCropperModalHook,
        bookingCacnelModalHook,
        travlerFormModalHook,
        verificationModalHook,
        verificationHook,
        languageSelectModal,
    } = intiialInfomation;
    const ComponentLayout = Component.Layout
        ? Component.Layout
        : ComponentDefaultLayout;
    const appContext = useAppContext(intiialInfomation);

    useGa4Next();

    dayjs.locale(locale);
    useEffect(() => {
        if (isIE()) {
            const target = document.getElementById("KoreaGuideCeneter");
            if (target) target.className = "IE";
        }
        const outWidth = window.outerWidth;
        if (outWidth < 1000) setIsMobile(true);
        else setIsMobile(false);
    }, []);

    consoleCover();
    useRouterScroll();
    useDummyLogin();

    return (
        <div
            key={appContext.me?._id + locale}
            style={{
                maxHeight: "100vh",
                overflowY: "auto",
            }}
            id="APP"
            className={"App" + (isMobile ? " App--mobile" : "")}
        >
            <Head>
                <script async src="/ga.js"></script>
                {locale === "ko" && (
                    <meta
                        name="description"
                        content="코리아 가이드센터 한국여행 가이드여행 전문 한국가이드 찾기"
                    />
                )}
                <title>Koreaguide Center</title>
                <meta
                    name="naver-site-verification"
                    content="669e41d134b60d5e16e6d2c4b237dc528218e483"
                />
                <meta httpEquiv="x-ua-compatible" content="IE=edge" />
            </Head>
            <AppContext.Provider
                key={appContext.me?._id}
                value={{
                    ...appContext,
                    isMobile,
                }}
            >
                <ComponentLayout>
                    <div style={{ minHeight: "40vh" }}>
                        <Component {...pageProps} />
                        {typeof window !== "undefined" && (
                            <ReactTooltip id="OutSideTooltip" />
                        )}
                        <Toast position="top-center" />
                    </div>
                </ComponentLayout>
                <SystemModals />

                {travlerFormModalHook.isOpen && (
                    <TravlerFormModal
                        key={
                            (travlerFormModalHook.info?.defaultTravlersInput
                                .length || 0) +
                            (travlerFormModalHook.isOpen ? "T" : "F")
                        }
                        modalHook={travlerFormModalHook}
                    />
                )}
                {bookingCacnelModalHook.isOpen && (
                    <BookingCancelModal modalHook={bookingCacnelModalHook} />
                )}
                {loginModalHook.isOpen && (
                    <LogiModal modalHook={loginModalHook} />
                )}
                {imageCropperModalHook.isOpen && (
                    <ImageCropModal
                        key={imageCropperModalHook.isOpen ? "OICM" : "CICM"}
                        {...imageCropperModalHook}
                    />
                )}
                {policyModalHook.isOpen && (
                    <PrivacyModal
                        key={policyModalHook.isOpen ? "opend" : "closed"}
                        modalHook={policyModalHook}
                    />
                )}
                {languageSelectModal.isOpen && (
                    <LanguageSelectModal
                        key={
                            languageSelectModal.isOpen
                                ? "opendLanguageSelectModal"
                                : "closedLanguageSelectModal"
                        }
                        modalHook={languageSelectModal}
                    />
                )}
                {verificationModalHook.isOpen && (
                    <VerificationModal
                        key={
                            verificationModalHook.isOpen
                                ? "opendVerificationModal"
                                : "closedVerificationModal"
                        }
                        modalHook={verificationModalHook}
                        {...verificationHook}
                    />
                )}
            </AppContext.Provider>
            <div id="portal" />
        </div>
    );
}
export const AppWrap = (props: any) => {
    return (
        <div>
            <RecoilRoot>
                <ApolloProvider client={apolloClient}>
                    <App {...props} />
                </ApolloProvider>
            </RecoilRoot>
        </div>
    );
};

export default AppWrap;
