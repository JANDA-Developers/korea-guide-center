import { gql } from "@apollo/client";
import { F_COLLECTION_DATA_INTERFACE, F_FILE } from "./shared";

export const F_NOTIFICATION_SENDER = gql`
    fragment FnotificationSender on NotificationSender {
        type
        label
        sender
        isVerified
        files {
            ...Ffile
        }
        isRegisteredToSES
        isRegisteredToAligo
        createdAt
    }
    ${F_FILE}
`;

export const F_NOTIFICATION_MANAGER = gql`
    fragment FnotificationManager on NotificationManager {
        _id
        createdAt
        updatedAt
        emailPricing
        currency
        pointRemains
        senders {
            ...FnotificationSender
        }
        smsPricingTable {
            SMS
            LMS
            MMS
        }
        emailPricing
        kakaoPrice
        kakaoApiKey
        kakaoUserId
        kakaoSenderKey
        userName
    }
    ${F_NOTIFICATION_SENDER}
`;

export const F_NOTIFICATION_HISTORY_ITEM = gql`
    fragment FnotificationHistoryItem on NotificationHistoryItem {
        ...FcollectionDataInterface
        method
        sender
        receivers
        title
        content
        count
        successCount
        errorCount
        pointRemains
        pointConsumed
    }
    ${F_COLLECTION_DATA_INTERFACE}
`;

export const F_NOTIFICATION_TRIGGER = gql`
    fragment FnotificationTrigger on NotificationTrigger {
        sender
        event
        isEnabled
        addReceivers
        autoSendTargetType
        tags {
            key
            value
        }
    }
`;

export const F_KAKAO_TEMPLATE_BUTTON = gql`
    fragment FkakaoTemplateButton on KakaoTemplateButton {
        ordering
        name
        linkType
        linkTypeName
        linkMo
        linkPc
        linkIos
        linkAnd
        linkM
        linkP
        linkI
        linkA
    }
`;

export const F_KAKAO_TEMPLATE = gql`
    fragment FkakaoTemplate on KakaoTemplate {
        templtContent
        templtName
        status
        inspStatus
        buttons {
            ...FkakaoTemplateButton
        }
        cdate
        udate
        comments {
            commentContent
            cdate
            status
        }
        templtCode
    }
    ${F_KAKAO_TEMPLATE_BUTTON}
`;

export const F_NOTIFICATION_TEMPLATE = gql`
    fragment FnotificationTemplate on ITemplate {
        ...FcollectionDataInterface
        name
        description
        content
        replayTo
        notificationMethod
        replacers
        replayTo
        kakaoTemplateStatus
        kakaoTemplateInspStatus
        kakaoTemplateCode
        kakaoTemplate {
            ...FkakaoTemplate
        }
    }
    ${F_KAKAO_TEMPLATE}
    ${F_COLLECTION_DATA_INTERFACE}
`;
