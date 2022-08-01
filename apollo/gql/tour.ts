import { gql } from "@apollo/client";
import { F_TOUR } from "./fragment/tour";
import { F_PAGEINFO, F_USERERROR } from "./fragment/shared";
import { F_BOOKING } from "./fragment/booking";
import { F_USER } from "./fragment/user";

export const TOUR_UPDATE = gql`
    mutation tourUpdate(
        $producInput: ProductInput!
        $input: TourInput!
        $TourId: ObjectId!
    ) {
        TourUpdate(TourId: $TourId, input: $input, producInput: $producInput) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const TOUR_CREATE = gql`
    mutation tourCreate($input: [TourInput!]!, $productId: ObjectId!) {
        TourCreate(input: $input, productId: $productId) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const TOUR_CANCEL = gql`
    mutation tourCancel($TourId: ObjectId!, $reason: String!) {
        TourCancel(TourId: $TourId, reason: $reason) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const TOUR_DELETE = gql`
    mutation tourDelete($TourId: ObjectId!) {
        TourDelete(TourId: $TourId) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const REPRESENTIVE_TOUR_CHANGE = gql`
    mutation representiveTourChange($NextRepresentiveTourId: ObjectId!) {
        RepresentiveTourChange(
            NextRepresentiveTourId: $NextRepresentiveTourId
        ) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const TOUR_LIST = gql`
    query tourList(
        $sort: [_TourSort!]
        $filter: _TourFilter
        $pagingInput: OffsetPagingInput!
    ) {
        TourList(sort: $sort, pagingInput: $pagingInput, filter: $filter) {
            pageInfo {
                ...FoffsetPagingInfo
            }
            items {
                ...Ftour
            }
        }
    }
    ${F_PAGEINFO}
    ${F_TOUR}
`;

export const TOUR_FIND_BY_ID = gql`
    query tourFindById($TourId: ObjectId!) {
        TourFindById(TourId: $TourId) {
            ...Ftour
            Bookings {
                ...Fbooking
            }
            guide {
                ...Fuser
            }
        }
    }
    ${F_USER}
    ${F_BOOKING}
    ${F_TOUR}
`;
