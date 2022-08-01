import { Flex, JDColor, JDtypho } from "@janda-com/front";
import { IselectedOption } from "@janda-com/front/dist/types/interface";
import {
    BookingStatus,
    CategoryType,
    FeeType,
    Flangs,
    Gender,
    LANGUAGES,
    ProductStatus,
    SettlementStatus,
    TourStatus,
} from "../types/api";
import { QuestionTypes } from "../types/board";
import { enumToOp } from "./enumToOps";

export const languageConverter = <_, T>(obj: T, l: any): T => {
    const newObj: any = {};
    Object.entries(obj).forEach(([key]) => {
        newObj[key] = l(key);
    });
    return newObj as any;
};

export const languageOpsConverter = <_, T>(
    ops: IselectedOption<T>[],
    l: any
): IselectedOption<T>[] => {
    return ops.map((op) => ({
        label: l(op.value),
        value: op.value,
    }));
};

export const langToKr: Record<LANGUAGES, string> = {
    chi: "중국어",
    en: "영어",
    ja: "일본어",
    ko: "한국어",
    ot: "기타",
};

export const categoryTypeToKr: Record<CategoryType, string> = {
    ITEM: "상품 카테고리 (단일선택)",
    ITEM_SMALL: "상품 작은 카테고리 (다중선택)",
    REIGION: "지역 카테고리",
    GUIDE: "가이드 카테고리",
};

export const feeTypeToKr: Record<FeeType, string> = {
    DEFAULT: "뺄셈",
    PERCNET: "퍼센트",
};

export let LanguagesOps = enumToOp(LANGUAGES, langToKr);
LanguagesOps = LanguagesOps.filter((langOp) => langOp.value !== "ot");

export const CategoryOps = enumToOp(CategoryType, categoryTypeToKr);
export const FeeTpyesOps = enumToOp(FeeType, feeTypeToKr);

export const ProductStatusKr: Record<ProductStatus, string> = {
    OPEN: "등록완료",
    READY: "작성중",
};

export const ProductStatusColor: Record<ProductStatus, JDColor> = {
    OPEN: "primary",
    READY: "grey4",
};

export const TourStatusColor: Record<TourStatus, JDColor> = {
    CANCEL: "error",
    DONE: "grey3",
    READY: "primary",
};

export const SettlementStatusColor: Record<SettlementStatus, JDColor> = {
    COMPLETED: "primary",
    READY: "grey3",
    REQUEST: "new",
};

export const SettlementStatusKr: Record<SettlementStatus, string> = {
    COMPLETED: "정산완료",
    READY: "정산대기",
    REQUEST: "요청진행중",
};

export const TourStatusKr: Record<TourStatus, string> = {
    CANCEL: "투어캔슬",
    DONE: "투어종료",
    READY: "모집중",
};

export const agePerPeopleCnt = (adult: number, kids: number, baby: number) => {
    return (
        <div>
            <JDtypho mb="tiny">성인:{adult}</JDtypho>
            <JDtypho mb="tiny">소인:{kids}</JDtypho>
            <JDtypho>유아:{baby}</JDtypho>
        </div>
    );
};

export const AgePerPeopleCnt: React.FC<{
    adult: number;
    kids: number;
    baby: number;
}> = ({ adult, baby, kids }) => {
    return (
        <Flex>
            <JDtypho mr="tiny">성인:{adult}</JDtypho>
            <JDtypho mr="tiny">소인:{kids}</JDtypho>
            <JDtypho>유아:{baby}</JDtypho>
        </Flex>
    );
};

export const GnederToKr: Record<Gender, string> = {
    FEMALE: "여",
    MALE: "남",
};

export const BookingStatusKr: Record<BookingStatus, string> = {
    CANCEL: "예약취소",
    COMPLETE: "예약완료",
    READY: "예약대기",
};

export const BookinGStatusColor: Record<BookingStatus, JDColor> = {
    CANCEL: "error",
    COMPLETE: "primary",
    READY: "grey4",
};

export const ln = (
    key?: any | null,
    obj?: Flangs | null | Omit<Flangs, "__typename">
) => obj?.[key as keyof Omit<Flangs, "__typename">] || "";
export const rangeDayKr = (rangeDay: number) => {
    return rangeDay ? rangeDay + "박" + (rangeDay + 1) + "일" : "당일투어";
};
