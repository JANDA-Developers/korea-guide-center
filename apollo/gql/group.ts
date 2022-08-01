import { gql } from "@apollo/client";
import { F_LANGS, F_PAGEINFO, F_USERERROR } from "./fragment/shared";

export const F_GROUP = gql`
    fragment Fgroup on Group {
        _id
        updatedAt
        createdAt
        target
        key
        order
        label {
            ...Flangs
        }
        desc {
            ...Flangs
        }
        members
    }
    ${F_LANGS}
`;

export const GROUP_CREATE = gql`
    mutation groupCreate($input: GroupInput!) {
        GroupCreate(input: $input) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const GROUP_DELETE = gql`
    mutation groupDelete($GroupId: ObjectId!) {
        GroupDelete(GroupId: $GroupId) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const GROUP_FIND_BY_ID = gql`
    query groupFindById($GroupId: ObjectId!) {
        GroupFindById(GroupId: $GroupId) {
            ...Fgroup
        }
    }
    ${F_GROUP}
`;

export const GROUP_LIST = gql`
    query groupList(
        $sort: [_GroupSort!]
        $filter: _GroupFilter
        $pagingInput: OffsetPagingInput!
    ) {
        GroupList(sort: $sort, pagingInput: $pagingInput, filter: $filter) {
            pageInfo {
                ...FoffsetPagingInfo
            }
            items {
                ...Fgroup
            }
        }
    }
    ${F_PAGEINFO}
    ${F_GROUP}
`;

export const GROUP_UPDATE = gql`
    mutation groupUpdate($input: GroupInput!, $GroupId: ObjectId!) {
        GroupUpdate(GroupId: $GroupId, input: $input) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;
