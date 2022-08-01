import { getRefetch } from "@janda-com/front";
import {
    NOTIFICATION_HISTORY,
    NOTIFICATION_MANAGER_FIND_BY_ID,
    NOTIFICATION_TEMPLATE_LIST,
    NOTIFICATION_SEND_SINGLE,
    NOTIFICATION_SEND_WITH_TEMPLATE,
    NOTIFICATION_TEMPLATE_CREATE,
    NOTIFICATION_TEMPLATE_DELETE,
    NOTIFICATION_TEMPLATE_UPDATE,
    NOTIFICATION_MANAGER_LIST,
    UNREAD_SYSTEM_NOTI_FIND,
    KAKAO_TEMPLATE_CONFIRM_REQUEST,
} from "../apollo/gql/notification";
import {
    _NotificationManagerFilter,
    _NotificationManagerSort,
    notificationManagerList,
    notificationManagerListVariables,
    notificationManagerList_NotificationManagerList_items,
    notificationHistory,
    notificationHistoryVariables,
    notificationHistory_NotificationHistory_items,
    notificationmanagerFindById,
    notificationmanagerFindByIdVariables,
    notificationmanagerFindById_NotificationManagerFindById,
    notificationTemplateList,
    notificationTemplateList_NotificationTemplateList_items,
    notificationSendSingle,
    notificationSendSingleVariables,
    notificationSendWithTemplate,
    notificationSendWithTemplateVariables,
    notificationTemplateCreate,
    notificationTemplateCreateVariables,
    notificationTemplateDelete,
    notificationTemplateDeleteVariables,
    notificationTemplateUpdate,
    notificationTemplateUpdateVariables,
    _ITemplateFilter,
    _NotificationHistoryItemFilter,
    _NotificationHistoryItemSort,
    unReadSystemNotiFind,
    unReadSystemNotiFind_UnReadSystemNotiFind,
    unReadSystemNotiFind_UnReadSystemNotiFind_data,
    kakaoTemplateConfirmRequest,
    kakaoTemplateConfirmRequestVariables,
    _ITemplateSort,
} from "../types/api";
import {
    generateFindQuery,
    generateListQueryHook,
    generateMutationHook,
    generateQueryHook,
} from "../utils/query";

export const useNotificationHistory = generateListQueryHook<
    _NotificationHistoryItemFilter,
    _NotificationHistoryItemSort,
    notificationHistory,
    notificationHistoryVariables,
    notificationHistory_NotificationHistory_items
>(NOTIFICATION_HISTORY, {
    initialSort: [_NotificationHistoryItemSort.createdAt__desc],
});
export const useNotificationManagerFindById = generateFindQuery<
    notificationmanagerFindById,
    notificationmanagerFindByIdVariables,
    notificationmanagerFindById_NotificationManagerFindById
>("notificationManagerId", NOTIFICATION_MANAGER_FIND_BY_ID);

export const useNotificationSendSingle = generateMutationHook<
    notificationSendSingle,
    notificationSendSingleVariables
>(NOTIFICATION_SEND_SINGLE);
export const useSendWithTempalte = generateMutationHook<
    notificationSendWithTemplate,
    notificationSendWithTemplateVariables
>(NOTIFICATION_SEND_WITH_TEMPLATE);

export const useNotificationTemplateList = generateListQueryHook<
    _ITemplateFilter,
    _ITemplateSort,
    notificationTemplateList,
    notificationHistoryVariables,
    notificationTemplateList_NotificationTemplateList_items
>(NOTIFICATION_TEMPLATE_LIST);
export const useTemplateCreate = generateMutationHook<
    notificationTemplateCreate,
    notificationTemplateCreateVariables
>(NOTIFICATION_TEMPLATE_CREATE, { ...getRefetch(NOTIFICATION_TEMPLATE_LIST) });
export const useTemplateUpdate = generateMutationHook<
    notificationTemplateUpdate,
    notificationTemplateUpdateVariables
>(NOTIFICATION_TEMPLATE_UPDATE, { ...getRefetch(NOTIFICATION_TEMPLATE_LIST) });
export const useTemplateDelete = generateMutationHook<
    notificationTemplateDelete,
    notificationTemplateDeleteVariables
>(NOTIFICATION_TEMPLATE_DELETE, { ...getRefetch(NOTIFICATION_TEMPLATE_LIST) });

export const useNotificationManagerList = generateListQueryHook<
    _NotificationManagerFilter,
    _NotificationManagerSort,
    notificationManagerList,
    notificationManagerListVariables,
    notificationManagerList_NotificationManagerList_items
>(NOTIFICATION_MANAGER_LIST);

export const useUnReadNotifiFind = generateQueryHook<
    unReadSystemNotiFind,
    unReadSystemNotiFind_UnReadSystemNotiFind,
    undefined
>(UNREAD_SYSTEM_NOTI_FIND, { onError: () => {} });

export const useKakaoTemplateConfirmRequest = generateMutationHook<
    kakaoTemplateConfirmRequest,
    kakaoTemplateConfirmRequestVariables
>(KAKAO_TEMPLATE_CONFIRM_REQUEST, {
    ...getRefetch(NOTIFICATION_TEMPLATE_LIST),
});
