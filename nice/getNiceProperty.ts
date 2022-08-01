import { Paths } from "../pages/index[depre]";
import { Paymethod } from "../types/api";
import { INiceElementProp } from "./NiceElments";

interface IGetNicePropertyProp {
    niceAuthData: nicePayAuthData;
    email: string;
    name: string;
    phoneNumber: string;
    goodsName: string;
    paymethod: Paymethod;
}

export interface nicePayAuthData
    extends ReturnType<typeof purchaseCreatePaymentInfoReader> {}
export const purchaseCreatePaymentInfoReader = (
    paymentInfo: string,
    bookingId: string
) => {
    const [editDate, priceOrigin, hash, moid] = paymentInfo.split("__");

    const customParam = JSON.stringify({
        bookingId: bookingId,
        returnURL:
            location.origin + Paths.paySucess + "?bookingId=" + bookingId,
        errorURL: location.origin + Paths.payErr,
    });

    return {
        editDate,
        priceOrigin,
        hash,
        moid,
        customParam,
    };
};

export const getNiceProperty = ({
    niceAuthData,
    email,
    goodsName,
    name,
    phoneNumber,
    paymethod,
}: IGetNicePropertyProp) => {
    const isKAKAO = paymethod === Paymethod.KAKAO;
    const isNAVER = paymethod === Paymethod.NAVER;

    const commonDirectOption: Partial<INiceElementProp> = {
        PayMethod: "CARD",
        DirectShowOpt: "CARD",
    };

    const naverDirect: Partial<INiceElementProp> = {
        ...commonDirectOption,
        EasyPayMethod: "E020=CARD",
        DirectEasyPay: "E020",
    };
    const kakaoDirect: Partial<INiceElementProp> = {
        ...commonDirectOption,
        NicepayReserved: "DirectKakao=Y",
    };

    let targetDirect: Partial<INiceElementProp> = {
        DirectShowOpt: undefined,
        DirectEasyPay: undefined,
        NicepayReserved: undefined,
        EasyPayMethod: undefined,
    };
    if (isKAKAO) {
        targetDirect = kakaoDirect;
    } else if (isNAVER) {
        targetDirect = naverDirect;
    }

    const niceInfo: Partial<INiceElementProp> = {
        ReturnURL: process.env.NEXT_PUBLIC_NICE_PAY_END_POINT!,
        endPoint: process.env.NEXT_PUBLIC_NICE_PAY_END_POINT!,
        BuyerEmail: email!,
        BuyerName: name!,
        Amt: niceAuthData?.priceOrigin.toString()!,
        BuyerTel: phoneNumber,
        EdiDate: niceAuthData?.editDate!,
        GoodsName: goodsName,
        IspCancelUrl: location.href,
        Moid: niceAuthData?.moid!,
        hex: niceAuthData?.hash!,
        isAuth: niceAuthData ? true : false,
        logo: "",
        CustomParam: niceAuthData?.customParam!,
        MID: "stayjand6m",
        merchantID: "stayjand6m",
        // @ts-ignore
        PayMethod: targetDirect.PayMethod || paymethod,
        ...targetDirect,
    };

    return niceInfo;
};
