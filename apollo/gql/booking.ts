import { gql } from "@apollo/client";
import { F_BOOKING } from "./fragment/booking";
import { F_PAGEINFO, F_USERERROR } from "./fragment/shared";
import { F_TOUR } from "./fragment/tour";

export const BOOKING_UPDATE = gql`
    mutation bookingUpdate($input: BookingInput!, $BookingId: ObjectId!) {
        BookingUpdate(BookingId: $BookingId, input: $input) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const BOOKING_CREATE = gql`
    mutation bookingCreate(
        $input: BookingInput!
        $tourId: ObjectId!
        $offerId: ObjectId
    ) {
        BookingCreate(input: $input, tourId: $tourId, offerId: $offerId) {
            ok
            error {
                ...FuserError
            }
            data {
                ...Fbooking
                niceAuthStr
            }
        }
    }
    ${F_BOOKING}
    ${F_USERERROR}
`;

export const BOOKING_DELETE = gql`
    mutation bookingDelete($BookingId: ObjectId!) {
        BookingDelete(BookingId: $BookingId) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const BOOKING_LIST = gql`
    query bookingList(
        $sort: [_BookingSort!]
        $filter: _BookingFilter
        $pagingInput: OffsetPagingInput!
    ) {
        BookingList(sort: $sort, pagingInput: $pagingInput, filter: $filter) {
            pageInfo {
                ...FoffsetPagingInfo
            }
            items {
                ...Fbooking
            }
        }
    }
    ${F_PAGEINFO}
    ${F_BOOKING}
`;

export const BOOKING_FIND_BY_ID = gql`
    query bookingFindById($BookingId: ObjectId!) {
        BookingFindById(BookingId: $BookingId) {
            ...Fbooking
            tour {
                ...Ftour
            }
        }
    }
    ${F_TOUR}
    ${F_BOOKING}
`;

export const BOOKING_FIND_BY_INFO = gql`
    query bookingFindByInfo($name: String!, $contact: String!) {
        BookingFindByInfo(name: $name, contact: $contact) {
            ...Fbooking
        }
    }
    ${F_BOOKING}
`;

export const BOOKING_CANCEL = gql`
    mutation bookingCancel($BookingId: ObjectId!, $cancelReason: String!) {
        BookingCancel(BookingId: $BookingId, cancelReason: $cancelReason) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const BOOKING_REFUND = gql`
    mutation bookingRefund($bookingId: ObjectId!, $amount: Float!) {
        BookingRefund(bookingId: $bookingId, amount: $amount) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;
