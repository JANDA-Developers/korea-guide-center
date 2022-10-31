import React, { useEffect, useState } from "react";
import { IUseInit } from "../hook/useInit";
import { LANGUAGES } from "../types/api";
import statics from "../static.json";

export type TStaticLangFn = (key: keyof typeof statics) => any;

export interface IContext extends IUseInit {
    s: TStaticLangFn;
    isMobile: boolean;
}

const foo: any = "";
const defaultContext: IContext = {
    payMehtodLangOps: foo,
    verificationHook: foo,
    verificationModalHook: foo,
    languageSelectModal: foo,
    languageOps: foo,
    deleteSure: foo,
    imgSliderModalHook: foo,
    meNetWorkStatus: 0,
    imageCropperModalHook: foo,
    myId: foo,
    ownerFilter: foo,
    loginAnd: () => {},
    loginModalHook: foo,
    alertModalHook: foo,
    policyModalHook: foo,
    confirmModalHook: foo,
    catMap: foo,
    catOpMap: foo,
    travlerFormModalHook: foo,
    bookingCacnelModalHook: foo,
    commonProductFilter: foo,
    groups: foo,
    homepage: foo,
    contextQueryLoading: false,
    isBooker: false,
    isGuide: false,
    isLogin: false,
    indexGroup: foo,
    isMaster: false,
    groupsNonIndex: foo,
    isMobile: false,
    l: foo,
    s: foo,
    productOps: foo,
    promptModalHook: foo,
    me: foo,
    getMeAgain: foo,
    locale: LANGUAGES.ko,
};

export const AppContext = React.createContext<IContext>(defaultContext);

export const useAppContext = (initialProp: IUseInit) => {
    const { contextQueryLoading } = initialProp;
    //기본 콘텍스트 셋팅
    const [context, setContext] = useState({
        ...defaultContext,
    });

    //로딩이 끝나면 콘텍스트를 업데이트
    useEffect(() => {
        console.count("Context Update Occured");
        setContext({
            ...defaultContext,
        });
    }, [defaultContext.me, contextQueryLoading]);

    return {
        ...context,
        ...initialProp,
    };
};
