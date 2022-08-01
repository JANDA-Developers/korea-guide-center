import { IselectedOption } from "@janda-com/front/dist/types/interface";
import {
    FnotificationTemplate,
    KakaoTemplateInspStatus,
    NotificationMethod,
} from "../../types/api";

export const PurchaseChangeAble: IselectedOption[] = [
    {
        label: "예약자",
        value: "[%%PB_BOOKER%%]",
    },
    {
        label: "연락처",
        value: "[%%PB_CONTACT%%]",
    },
    {
        label: "상품명",
        value: "[%%PB_ITEMNAME%%]",
    },
];

export const SMS_TEMPLATE: IselectedOption[] = [
    {
        label: "예약문자",
        value: "[%%PB_BOOKER%%]님 어서오세요",
    },
];

export const EMAIL_TEMPLATE: IselectedOption[] = [
    {
        label: "예약문자",
        value: "<h1>[%%PB_BOOKER%%]님 어서오세요</h1>",
    },
];

export const notificationMethodChecker = (method: NotificationMethod) => {
    const isSMS = method === NotificationMethod.SMS;
    const isKakao = method === NotificationMethod.KAKAO;
    const isEmail = method === NotificationMethod.EMAIL;

    return { isSMS, isKakao, isEmail };
};

export const validTemplateFilter = (
    templates: FnotificationTemplate[]
): FnotificationTemplate[] => {
    return templates.filter((template) => {
        if (template.notificationMethod === NotificationMethod.KAKAO) {
            if (
                template.kakaoTemplateInspStatus !== KakaoTemplateInspStatus.APR
            )
                return false;
        }
        return true;
    });
};
