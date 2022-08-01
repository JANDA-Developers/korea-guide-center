import { getRefetch } from "@janda-com/front";
import {
    BOOKING_CREATE,
    BOOKING_UPDATE,
    BOOKING_DELETE,
    BOOKING_FIND_BY_ID,
    BOOKING_LIST,
    BOOKING_CANCEL,
    BOOKING_REFUND,
    BOOKING_FIND_BY_INFO,
} from "../apollo/gql/booking";
import { ME } from "../apollo/gql/user";
import {
    bookingCreate,
    bookingCreateVariables,
    bookingUpdate,
    bookingUpdateVariables,
    bookingList_BookingList_items,
    bookingDelete,
    bookingDeleteVariables,
    bookingFindById,
    bookingFindByIdVariables,
    bookingFindById_BookingFindById,
    bookingList,
    bookingListVariables,
    _BookingFilter,
    _BookingSort,
    bookingCancel,
    bookingCancelVariables,
    bookingRefund,
    bookingRefundVariables,
    bookingFindByInfo,
    bookingFindByInfoVariables,
    bookingFindByInfo_BookingFindByInfo,
} from "../types/api";
import { completeMsg } from "../utils/onCompletedMessage";
import {
    generateFindQuery,
    generateListQueryHook,
    generateMutationHook,
    generateQueryHook,
} from "../utils/query";

export const useBookingFindByInfo = generateQueryHook<
    bookingFindByInfo,
    bookingFindByInfo_BookingFindByInfo[],
    bookingFindByInfoVariables
>(BOOKING_FIND_BY_INFO);
export const useBookingFindById = generateFindQuery<
    bookingFindById,
    bookingFindByIdVariables,
    bookingFindById_BookingFindById
>("BookingId", BOOKING_FIND_BY_ID);
export const useBookingList = generateListQueryHook<
    _BookingFilter,
    _BookingSort,
    bookingList,
    bookingListVariables,
    bookingList_BookingList_items
>(BOOKING_LIST, { initialSort: [_BookingSort.createdAt__desc] });
export const useBookingCreate = generateMutationHook<
    bookingCreate,
    bookingCreateVariables
>(BOOKING_CREATE, { ...getRefetch(BOOKING_LIST, ME) });
export const useBookingDelete = generateMutationHook<
    bookingDelete,
    bookingDeleteVariables
>(BOOKING_DELETE, { ...getRefetch(BOOKING_LIST) });
export const useBookingUpdate = generateMutationHook<
    bookingUpdate,
    bookingUpdateVariables
>(BOOKING_UPDATE, { ...getRefetch(BOOKING_LIST) });
export const useBookingCancel = generateMutationHook<
    bookingCancel,
    bookingCancelVariables
>(BOOKING_CANCEL, { ...getRefetch(BOOKING_FIND_BY_ID, BOOKING_LIST) });
export const useBookingRefund = generateMutationHook<
    bookingRefund,
    bookingRefundVariables
>(BOOKING_REFUND, {
    ...getRefetch(BOOKING_FIND_BY_ID, BOOKING_LIST),
    onCompleted: ({ BookingRefund }) => {
        completeMsg(BookingRefund, "환불완료");
    },
});
