import { gql } from "@apollo/client";
import { F_POLICY, F_PAGEINFO, F_USERERROR } from "./fragment/fragments";

export const POLICY_UPDATE = gql`
    mutation policyUpdate($input: PolicyInput!, $policyId: ObjectId!) {
        PolicyUpdate(policyId: $policyId, input: $input) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const POLICY_ORDER_UPDATE = gql`
    mutation policyOrderUpdate($input: [OrderUpdateInput!]!) {
        PolicyOrderUpdate(input: $input) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const POLICY_CREATE = gql`
    mutation policyCreate($input: PolicyInput!) {
        PolicyCreate(input: $input) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const POLICY_DELETE = gql`
    mutation policyDelete($policyId: ObjectId!) {
        PolicyDelete(policyId: $policyId) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const POLICY_LIST = gql`
    query policyList(
        $sort: [_PolicySort!]
        $filter: _PolicyFilter
        $pagingInput: OffsetPagingInput!
    ) {
        PolicyList(sort: $sort, pagingInput: $pagingInput, filter: $filter) {
            pageInfo {
                ...FoffsetPagingInfo
            }
            items {
                ...Fpolicy
            }
        }
    }
    ${F_POLICY}
    ${F_PAGEINFO}
`;

export const POLICY_FIND_BY_ID = gql`
    query policyFindById($policyId: ObjectId!) {
        PolicyFindById(policyId: $policyId) {
            ...Fpolicy
        }
    }
    ${F_POLICY}
`;

export const POLICY_FIND_BY_KEY = gql`
    query policyFindByKey($key: String!) {
        PolicyFindByKey(key: $key) {
            ...Fpolicy
        }
    }
    ${F_POLICY}
`;
