import { gql } from "@apollo/client";
import { F_COMMENT } from "./fragment/comment";
import { F_PAGEINFO, F_USERERROR } from "./fragment/shared";

export const COMMENT_UPDATE = gql`
    mutation commentUpdate($input: CommentInput!, $commentId: ObjectId!) {
        CommentUpdate(commentId: $commentId, input: $input) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const COMMENT_CREATE = gql`
    mutation commentCreate(
        $input: CommentInput!
        $targetId: ObjectId!
        $target: CommentTarget!
    ) {
        CommentCreate(input: $input, targetId: $targetId, target: $target) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const COMMENT_DELETE = gql`
    mutation commentDelete($commentId: ObjectId!) {
        CommentDelete(commentId: $commentId) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const COMMENT_LIST = gql`
    query commentList(
        $sort: [_CommentSort!]
        $filter: _CommentFilter
        $pagingInput: OffsetPagingInput!
    ) {
        CommentList(sort: $sort, pagingInput: $pagingInput, filter: $filter) {
            pageInfo {
                ...FoffsetPagingInfo
            }
            items {
                ...Fcomment
            }
        }
    }
    ${F_PAGEINFO}
    ${F_COMMENT}
`;
