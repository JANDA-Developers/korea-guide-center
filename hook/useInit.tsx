import { useModal } from "@janda-com/front";
import { IselectedOption } from "@janda-com/front/dist/types/interface";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Red } from "../atom/shortCut/Short";
import {
    IAlertModalInfo,
    IConfirmModalInfo,
} from "../component/AlertModal/AlertModal";
import { IBookingCancelModalInfo } from "../component/bookingControlModal/BookingCancelModal";
import { JDicon } from "../component/icons/Icons";
import { IImageCropModalInfo } from "../component/imageCropper/ImageCropperModal";
import { ILanguageSelectModalInfo } from "../component/languageSelectModal/LnaugageSelectModal";
import { ILogiModalInfo } from "../component/loginModal/LoginModal";
import { IPrivacyModalInfo } from "../component/privacyModal/PrivacyModal";
import { IPromptModalInfo } from "../component/promptModal/PromptModal";
import { ISliderModalModalInfo } from "../component/sliderModal/SliderModal";
import { ITravlerFormModalInfo } from "../component/traveler/TravlerFormModal";
import { getUserSummary } from "../component/userModal/UserModal";
import { IVerfiModalInfo } from "../component/verfi/VerificationModal";
import { Paths } from "../pages/index[depre]";
import { staticInfo } from "../static.json";
import {
    LANGUAGES,
    ProductStatus,
    UserRole,
    _ProductFilter,
} from "../types/api";
import { payMethodKr, PAY_METHOD_OPS } from "../types/const";
import { categoryMap, categoryMapToOpMap } from "../utils/categoryMap";
import {
    languageConverter,
    languageOpsConverter,
    LanguagesOps,
    ln,
} from "../utils/enumToKr";
import { useSystemInfo } from "./useSystem";
import { useMe, useSignOut } from "./useUser";
import { useVerification } from "./useVerification";

export const getTourLink = ({
    tourId,
    productId,
}: {
    productId: string;
    tourId: string;
}) => {
    return (
        location.origin +
        Paths.productDetailView +
        "/" +
        productId +
        "?tourId=" +
        tourId
    );
};

export type IUseInit = ReturnType<typeof useInit>;
export const useInit = () => {
    const { locale } = useRouter();
    const alertModalHook = useModal<IAlertModalInfo>();
    const confirmModalHook = useModal<IConfirmModalInfo>();
    const promptModalHook = useModal<IPromptModalInfo>();
    const loginModalHook = useModal<ILogiModalInfo>();
    const travlerFormModalHook = useModal<ITravlerFormModalInfo>();
    const bookingCacnelModalHook = useModal<IBookingCancelModalInfo>();
    const imageCropperModalHook = useModal<IImageCropModalInfo>();
    const imgSliderModalHook = useModal<ISliderModalModalInfo>();
    const policyModalHook = useModal<IPrivacyModalInfo>();
    const languageSelectModal = useModal<ILanguageSelectModalInfo>();
    const verificationModalHook = useModal<IVerfiModalInfo>();
    const verificationHook = useVerification();

    const [signOut] = useSignOut();
    const { data: systemInfo, networkStatus: systemStatus } = useSystemInfo({
        notifyOnNetworkStatusChange: true,
    });

    const {
        data: me,
        called,
        getLoading,
        networkStatus: meNetWorkStatus,
        getData: getMeAgain,
    } = useMe({
        notifyOnNetworkStatusChange: true,
        fetchPolicy: "no-cache",
    });

    const myId = me?._id;
    const ownerFilter = <T, _ = any>(filter: T): T =>
        isMaster ? ({} as any) : filter;

    useEffect(() => {
        if (me && me.stop) {
            alert(me.stopReason);
            signOut();
        }
    }, [me?.stop]);

    interface ILoginAndConfig {
        forceLogin?: boolean;
        modalInfo?: ILogiModalInfo;
    }

    const loginAnd = (
        fn: () => void,
        { forceLogin, modalInfo }: ILoginAndConfig = {}
    ) => {
        if (!!me && !forceLogin) {
            fn();
        } else {
            loginModalHook.openModal({
                sucessCallBack: () => {
                    loginModalHook.closeModal();
                    fn();
                },
                ...modalInfo,
            });
        }
    };

    const contextQueryLoading =
        !called || getLoading || meNetWorkStatus < 7 || systemStatus < 7;

    const { isBooker, isGuide, isMaster } = getUserSummary(me);
    const isLogin = !!me;

    const l = ln.bind(ln, locale);

    const homepage = systemInfo?.homepage;
    const groups = systemInfo?.groups;
    const groupsNonIndex = groups?.filter((g) => g.key !== "INDEX");
    const indexGroup = systemInfo?.groups?.find((g) => g.key === "INDEX");
    const catMap = categoryMap(systemInfo?.categories || []);
    const catOpMap = categoryMapToOpMap(catMap, l);

    const s = staticInfo(locale as any);

    const languageOps = languageOpsConverter(LanguagesOps, s);

    const payMehtodLangOps = PAY_METHOD_OPS.map((op) => {
        return {
            label: s(op.value as any),
            value: op.value,
        };
    });

    const productOps: IselectedOption[] =
        me?.products?.map((p) => ({
            value: p._id,
            label: p.title?.ko || "작성중",
        })) || [];

    const commonProductFilter: _ProductFilter = {
        status__eq: ProductStatus.OPEN,
        isPriviate__not_eq: true,
        languages__eq: (locale as LANGUAGES) || LANGUAGES.en,
        masterConfirmed__eq: true,
    };

    const deleteSure = (
        onContinue: () => void,
        message: string,
        title: string = `정말로 삭제하시겠습니까?`
    ) => {
        confirmModalHook.openModal({
            title,
            content: (
                <Red>
                    <JDicon icon="triWarn" /> {message}
                </Red>
            ),
            onContinue,
        });
    };

    return {
        me,
        groups,
        indexGroup,
        groupsNonIndex,
        homepage,
        loginAnd,
        deleteSure,
        alertModalHook,
        confirmModalHook,
        promptModalHook,
        loginModalHook,
        commonProductFilter,
        policyModalHook,
        bookingCacnelModalHook,
        languageOps,
        s,
        payMehtodLangOps,
        languageSelectModal,
        travlerFormModalHook,
        imageCropperModalHook,
        imgSliderModalHook,
        meNetWorkStatus,
        verificationModalHook,
        verificationHook,
        ownerFilter,
        isGuide,
        isMaster,
        isBooker,
        isLogin,
        catMap,
        catOpMap,
        productOps,
        contextQueryLoading,
        getMeAgain,
        myId,
        locale,
        l,
    };
};
