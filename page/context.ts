import React, { useContext, useState } from "react";
import { LANGUAGES } from "../types/api";
import { IselectedOption } from "@janda-com/front/dist/types/interface";
import { LanguagesOps } from "../utils/enumToKr";
import { IUseInit } from "../hook/useInit";
import { AppContext } from "../context/context";
import { IUseModal, useModal } from "@janda-com/front";
import { IUserModalInfo } from "../component/userModal/UserModal";
import { ITourModalInfo } from "../component/tourModal/TourModal";
import { IGlobalInputModalInfo } from "../component/GlobalInput/GlobalInputModal";
import { IProductSearchModalModalInfo } from "../component/grandProductSearchFilter/ProductSearchModal";
import { IRefundModalInfo } from "../component/refundModal/RefundModal";
import { IBookingViewModalInfo } from "./booking/components/bookingModal/BookingViewModal";
import { ITourSearchModalInfo } from "../component/grandProductSearchFilter/TourSearchModal";

export type TProductStoreMath = {
    prodId: string;
    storeId: string;
};

export interface IGuideContext extends Partial<IUseInit> {
    updateContext: (props: Partial<IGuideContext>) => void;
    mylangsOps: IselectedOption<LANGUAGES>[];
    myCatOps: IselectedOption<string>[];
    userModalHook: IUseModal<IUserModalInfo>;
    tourModalHook: IUseModal<ITourModalInfo>;
    tourSearchModalHook: IUseModal<ITourSearchModalInfo>;
    globalModalHook: IUseModal<IGlobalInputModalInfo>;
    refundModalHook: IUseModal<IRefundModalInfo>;
    productSearchModalHook: IUseModal<IProductSearchModalModalInfo>;
    bookingViewModalHook: IUseModal<IBookingViewModalInfo>;
}

export const DEFAULT_APP_CONTEXT: IGuideContext = {
    catOpMap: {
        ITEM: [],
        REIGION: [],
        GUIDE: [],
        ITEM_SMALL: [],
    },
    catMap: {
        ITEM: [],
        REIGION: [],
        GUIDE: [],
        ITEM_SMALL: [],
    },
    mylangsOps: [],
    myCatOps: [],
    updateContext: (foo: any) => {},
    userModalHook: 1 as any,
    globalModalHook: 1 as any,
    tourModalHook: 1 as any,
    tourSearchModalHook: 1 as any,
    refundModalHook: 1 as any,
    productSearchModalHook: 1 as any,
    bookingViewModalHook: 1 as any,
};

const GuideContext = React.createContext<IGuideContext>(DEFAULT_APP_CONTEXT);

export const useGuideContext = () => {
    const appContext = useContext(AppContext);
    const { me, catOpMap } = appContext;
    const guideCategoryOps = catOpMap.GUIDE;
    const userModalHook = useModal<IUserModalInfo>();
    const tourModalHook = useModal<ITourModalInfo>();
    const globalModalHook = useModal<IGlobalInputModalInfo>();
    const productSearchModalHook = useModal<IProductSearchModalModalInfo>();
    const tourSearchModalHook = useModal<ITourSearchModalInfo>();
    const refundModalHook = useModal<IRefundModalInfo>();
    const bookingViewModalHook = useModal<IBookingViewModalInfo>();

    //기본 콘텍스트 셋팅
    const [context, setContext] = useState({
        ...DEFAULT_APP_CONTEXT,
        ...appContext,
    });

    //콘텍스트 업데이트 함수
    const updateContext = (props: Partial<IGuideContext>) => {
        setContext({
            ...context,
            ...props,
        });
    };

    const mylangsOps =
        LanguagesOps.filter((langOp) => me?.langs.includes(langOp.value)) || [];

    const myCatOps =
        guideCategoryOps.filter((catOps) =>
            me?.guideCategory?.find((guideC) => guideC._id === catOps.value)
        ) || [];

    return {
        ...context,
        myCatOps,
        mylangsOps,
        userModalHook,
        tourModalHook,
        globalModalHook,
        refundModalHook,
        bookingViewModalHook,
        productSearchModalHook,
        tourSearchModalHook,
        updateContext,
    };
};

export const GuideContextProvider = GuideContext.Provider;
export default GuideContext;
