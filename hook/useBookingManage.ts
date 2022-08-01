import { toast } from "@janda-com/front";
import dayjs from "dayjs";
import { useContext } from "react";
import { AppContext, IContext } from "../context/context";
import { BookingInput, BookingStatus, Fbooking } from "../types/api";
import {
    useBookingCancel,
    useBookingDelete,
    useBookingRefund,
    useBookingUpdate,
} from "./useBooking";

interface IManageConfig {
    onSucess: () => void;
}

export const useBookingManage = (
    booking?: Fbooking,
    config?: IManageConfig
) => {
    const { s } = useContext(AppContext);
    const { onSucess } = config || {};
    const [updateMu, { loading: bookingUpdateLoading }] = useBookingUpdate({
        awaitRefetchQueries: true,
    });
    const [] = useBookingDelete();
    const [cancelMu, { loading: bookingCacnelLoading }] = useBookingCancel({
        skipMessage: true,
        onCompleteSucess: () => {
            toast.success(s("bookingHasCanceld"));
            onSucess?.();
        },
    });
    const [refundMu] = useBookingRefund({ onCompleteSucess: onSucess });

    const handleRefund = (amount: number) => {
        refundMu({
            variables: {
                amount,
                bookingId: booking?._id,
            },
        });
    };

    const handleCancel = (cancelReason: string) => {
        cancelMu({
            variables: {
                BookingId: booking?._id,
                cancelReason,
            },
        });
    };

    const handleUpdate = (booking: Fbooking, input: BookingInput) => {
        updateMu({
            variables: {
                BookingId: booking._id,
                input,
            },
        });
    };
    const handleComplete = (booking: Fbooking) => {
        updateMu({
            variables: {
                BookingId: booking?._id,
                input: {
                    bookingStatus: BookingStatus.COMPLETE,
                },
            },
        });
    };

    return {
        handleCancel,
        handleRefund,
        handleComplete,
        bookingUpdateLoading,
        bookingCacnelLoading,
    };
};

export const getBookingSummary = (booking: Fbooking, AppContext: IContext) => {
    const { isLogin, isMaster } = AppContext;
    const { bookingStatus, refundPrice, paidPrice, tourStart, createdAt } =
        booking;
    const isCacnel = bookingStatus === BookingStatus.CANCEL;
    const isComplete = bookingStatus === BookingStatus.COMPLETE;
    const isReady = bookingStatus === BookingStatus.READY;
    const isPast = dayjs(tourStart).isBefore(new Date());

    const cancelAb = !isPast && !isCacnel && isLogin;
    const completeAb = isReady && isLogin;
    const confirmAb = isReady && !isPast;
    const refundAb = isMaster && isCacnel && refundPrice < paidPrice;
    const reviewAb = isPast;

    return {
        cancelAb,
        refundAb,
        reviewAb,
        isComplete,
        isCacnel,
        isReady,
        confirmAb,
        completeAb,
    };
};
