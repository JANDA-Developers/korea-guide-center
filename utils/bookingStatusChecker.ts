import { BookingStatus, Fbooking, _BookingFilter } from "../types/api";
import dayjs from "dayjs";

// 끝난예약인지
export const isPast = (booking: Fbooking) => {
    const { tourStart } = booking;
    return dayjs(new Date()).isBefore(tourStart);
};
export const pastBookQuery: _BookingFilter = {
    tourStart__lte: new Date(),
    bookingStatus__not_eq: BookingStatus.CANCEL,
};
export const onGoingBookingQuery: _BookingFilter = {
    tourStart__gte: new Date(),
    bookingStatus__not_eq: BookingStatus.CANCEL,
};
export const readyBookingQuery: _BookingFilter = {
    bookingStatus__eq: BookingStatus.READY,
};
export const cancelBookingQuery: _BookingFilter = {
    bookingStatus__eq: BookingStatus.CANCEL,
};
