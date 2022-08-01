import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { useMyNotificationManager } from "../../hook/useUser";
import { NotificationContext } from "./context";
import { SmsInvoice } from "./page/SmsInvoice";
import { SmsInfo } from "./page/SmsInfo";
import { SmsIndex } from "./page/SmsIndex";
import { NotificationTemplates } from "./page/SmsTEmplates";
import SmsHistory from "./page/SmsHistory";
import {
    DefaultEmailSenderOP,
    DefaultSenderOP,
    DefaultKakaoSenderOP,
} from "../../types/const";
import { autoHypen } from "@janda-com/front";
import { NotificationMethod } from "../../types/api";
import { notificationMethodChecker } from "./helper";
import Helmet from "react-helmet";
import { IselectedOption } from "@janda-com/front/dist/types/interface";
import GuideContext from "../context";

// 바이페이지 라우터 (에디팅용)
// 쿼리 스트링에 id가 이 포함되어 있다면
// 바이페이지 라우터 (실전 iframe)

export enum SmsPaths {
    index = "/sms",
    info = "/sms/info",
    templates = "/sms/templates",
    history = "/sms/history",
    senederRegist = "/sms/senederRegist",
    invoce = "/sms/invoce",
}

interface IkakaoSenderOps extends IselectedOption {
    kakaoSenderKey: string;
    kakaoSenderImg: File;
}

interface IProp {}

export const SmsRouter: React.FC<IProp> = ({}) => {
    const { me } = useContext(GuideContext);
    const { data } = useMyNotificationManager();

    if (!data) return null;
    const manager = data;

    const getOpsByType = (type: NotificationMethod) => {
        const typeSenders = manager?.senders.filter(
            (sender) => sender.type === type
        );
        const ops = typeSenders
            .filter(
                (sender) =>
                    sender.isRegisteredToSES || sender.isRegisteredToAligo
            )
            .map((sender) => ({
                label: autoHypen(sender.sender),
                value: sender.sender,
            }));

        const { isEmail, isKakao, isSMS } = notificationMethodChecker(type);
        let defaultOp;
        if (isSMS) {
            defaultOp = DefaultSenderOP;
        } else if (isEmail) {
            defaultOp = DefaultEmailSenderOP;
        } else {
            defaultOp = DefaultKakaoSenderOP;
        }
        ops.push(defaultOp);
        return ops;
    };

    return (
        <div>
            <NotificationContext.Provider
                value={{
                    manager,
                    smsSendersOps: getOpsByType(NotificationMethod.SMS),
                    emailSendersOps: getOpsByType(NotificationMethod.EMAIL),
                    kakaoSenedersOps: getOpsByType(NotificationMethod.KAKAO),
                }}
            >
                <Switch>
                    <Route
                        exact
                        path={SmsPaths.index}
                        render={() => <SmsIndex />}
                    />
                    <Route
                        path={SmsPaths.templates}
                        render={() => <NotificationTemplates />}
                    />
                    {/* <Route path={SmsPaths.purchase} render={() => <SmsPurchase />} /> */}
                    <Route
                        path={SmsPaths.history}
                        render={() => <SmsHistory />}
                    />
                    <Route
                        path={SmsPaths.invoce}
                        render={() => <SmsInvoice />}
                    />
                    <Route path={SmsPaths.info} render={() => <SmsInfo />} />
                </Switch>
            </NotificationContext.Provider>
        </div>
    );
};

export default SmsRouter;
