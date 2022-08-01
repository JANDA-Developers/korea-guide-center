import { Paymethod } from "../types/api";

export const isNicePayMethod = (paymethod: Paymethod) => {
    const niceMethods = [Paymethod.CARD, Paymethod.KAKAO, Paymethod.NAVER];

    return niceMethods.includes(paymethod);
};
