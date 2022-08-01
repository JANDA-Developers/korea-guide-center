import {
    AutoSendTargetType,
    NotificationMethod,
    NotificationTemplateCreateInput,
    NotificationTriggerEvent,
} from "../../../types/api";
import { DEFAULT_EMAIL_SENDER, DEFAULT_SENDER } from "../../../types/const";

const SucessPurchaseNotiSms = "예약/주문 발신문자 예시 입니다";
const SucessPurchaseNotiEmail = "예약/주문 발신문자 예시 입니다";

class DefaultNotiTemplate {
    key: string;
    input: NotificationTemplateCreateInput;

    constructor(key: string, input: NotificationTemplateCreateInput) {
        this.key = key;
        this.input = input;
    }

    public replace(storeName: string) {}
}

export const defaultTemplates: DefaultNotiTemplate[] = [];
