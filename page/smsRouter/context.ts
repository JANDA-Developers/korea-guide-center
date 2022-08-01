import { IselectedOption } from "@janda-com/front/dist/types/interface";
import React from "react";
import { myNotificationManager_MyNotificationManager } from "../../types/api";

export interface INotificationContext {
    manager: myNotificationManager_MyNotificationManager;
    smsSendersOps: IselectedOption[];
    emailSendersOps: IselectedOption[];
    kakaoSenedersOps: IselectedOption[];
}

export const NotificationContext = React.createContext<INotificationContext>({
    manager: undefined as any,
    smsSendersOps: [],
    emailSendersOps: [],
    kakaoSenedersOps: [],
});
