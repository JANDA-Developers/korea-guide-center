import { gql } from "@apollo/client";
import { F_REVIEW } from "./fragment/review";
import { F_PAGEINFO, F_USERERROR } from "./fragment/shared";

export const REVIEW_UPDATE = gql`
    mutation reviewUpdate($input: ReviewInput!, $ReviewId: ObjectId!) {
        ReviewUpdate(ReviewId: $ReviewId, input: $input) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const REVIEW_CREATE = gql`
    mutation reviewCreate(
        $guideId: ObjectId!
        $tourId: ObjectId!
        $input: ReviewInput!
        $reviewerName: String
    ) {
        ReviewCreate(
            reviewerName: $reviewerName
            input: $input
            guideId: $guideId
            tourId: $tourId
        ) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const REVIEW_DELETE = gql`
    mutation reviewDelete($reviewId: ObjectId!) {
        ReviewDelete(ReviewId: $reviewId) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const REVIEW_LIST = gql`
    query reviewList(
        $sort: [_ReviewSort!]
        $filter: _ReviewFilter
        $pagingInput: OffsetPagingInput!
    ) {
        ReviewList(sort: $sort, pagingInput: $pagingInput, filter: $filter) {
            pageInfo {
                ...FoffsetPagingInfo
            }
            items {
                ...Freview
            }
        }
    }
    ${F_PAGEINFO}
    ${F_REVIEW}
`;

export const REVIEW_FIND_BY_ID = gql`
    query reviewFindById($reviewId: ObjectId!) {
        ReviewFindById(ReviewId: $reviewId) {
            ...Freview
        }
    }
    ${F_REVIEW}
`;
