import { gql } from "@apollo/client";
import { F_OFFER } from "./fragment/offer";
import { F_PAGEINFO, F_USERERROR } from "./fragment/shared";

export const OFFER_UPDATE = gql`
    mutation offerUpdate($input: WishTourInput!, $OfferId: ObjectId!) {
        OfferUpdate(OfferId: $OfferId, input: $input) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const OFFER_CREATE = gql`
    mutation offerCreate($input: WishTourInput!, $guideId: ObjectId) {
        OfferCreate(input: $input, guideId: $guideId) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const OFFER_DELETE = gql`
    mutation offerDelete($OfferId: ObjectId!) {
        OfferDelete(OfferId: $OfferId) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const OFFER_SEND = gql`
    mutation offerSend(
        $TourId: ObjectId!
        $OfferId: ObjectId!
        $message: String!
    ) {
        OfferSend(OfferId: $OfferId, TourId: $TourId, message: $message) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const OFFER_LIST = gql`
    query offerList(
        $sort: [_OfferSort!]
        $filter: _OfferFilter
        $pagingInput: OffsetPagingInput!
    ) {
        OfferList(sort: $sort, pagingInput: $pagingInput, filter: $filter) {
            pageInfo {
                ...FoffsetPagingInfo
            }
            items {
                ...Foffer
            }
        }
    }
    ${F_PAGEINFO}
    ${F_OFFER}
`;

export const OFFER_FIND_BY_ID = gql`
    query offerFindById($OfferId: ObjectId!) {
        OfferFindById(OfferId: $OfferId) {
            ...Foffer
        }
    }
    ${F_OFFER}
`;
